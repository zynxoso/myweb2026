---
type: technical-documentation
date: 2026-07-23
tags:
  - church-management
  - tauri
  - rust
  - react
  - typescript
  - sqlite
  - architecture
---

# Vessel of Joy Church Management System Technical Specification

This document provides a technical overview of the Vessel of Joy Church Management System architecture, data schemas, backend services, frontend layout, and security controls.

## System Architecture and Tech Stack

The application is built as an offline local-first desktop software targeting Windows 10 and Windows 11 x64 systems. It runs as a native single-instance desktop program with local SQLite data storage.

```mermaid
graph TD
    UI["[[React]] Frontend UI<br/>(TypeScript + Vite)"] -- "Tauri IPC Bridge (@tauri-apps/api)" --> IPC["[[Tauri]] Rust IPC Command Handlers"]
    
    subgraph Rust Core Backend ("vessel_of_joy_lib")
        IPC --> Auth["Auth & Session Service<br/>([[Argon2]] Hashing)"]
        IPC --> Schedule["Sunday Duty Scheduler Engine"]
        IPC --> Inv["Inventory & [[FEFO]] Engine"]
        IPC --> Raffle["Raffle Execution Engine"]
        IPC --> Backup["Backup & Encryption<br/>([[AES-256-GCM]] + SHA256)"]
        IPC --> Bible["Bible & YouVersion Gateway<br/>(reqwest HTTP Client)"]
        IPC --> AuditService["Audit Logging System"]
    end

    Auth --> DB[("Local [[SQLite]] Database<br/>(WAL Mode, Foreign Keys)")]
    Schedule --> DB
    Inv --> DB
    Raffle --> DB
    Backup --> DB
    Bible --> DB
    AuditService --> DB

    Bible -- "HTTPS (Rust side)" --> YV["[[YouVersion API]] Server"]
```

### Architecture Layers

1. Desktop Shell: [[Tauri]] v2 wraps the application using the Windows [[WebView2]] runtime. Plugins manage single instance constraints (`tauri-plugin-single-instance`) and OS native file dialogs (`tauri-plugin-dialog`).
2. Core Backend Engine: Written in [[Rust]] (edition 2021) as `vessel_of_joy_lib`. Handles business logic execution, role verification, database transactions, encryption, and network requests.
3. Database Layer: Embedded [[SQLite]] database managed via the [[rusqlite]] crate (v0.32 with bundled build). Configured with Write-Ahead Logging (`PRAGMA journal_mode = WAL`), foreign key enforcement (`PRAGMA foreign_keys = ON`), synchronous normal mode, and 5-second busy timeout.
4. User Interface: Built with [[React]] 18/19 and [[TypeScript]], bundled using [[Vite]]. Styled with vanilla CSS. Visual transitions use [[GSAP]] (`@gsap/react`). Iconography uses [[lucide-react]]. Typography uses `@fontsource/poppins`. Excel parsing uses `read-excel-file`.

## Core Data Models and Database Schemas

The database schema is defined in `schema.sql` and updated through versioned migrations in `db.rs` (currently schema version 12).

### Schema Tables and Relationships

- `users`: Stores user accounts. Key fields include `id` (UUIDv4), `username` (NOCASE UNIQUE), `display_name`, `password_hash` ([[Argon2]]), `active`, `failed_attempts`, `locked_until`, `recovery_code_hash`, and `recovery_code_created_at`.
- `roles` and `user_roles`: Implements [[Role-Based Access Control]]. Role codes are `administrator`, `secretary`, `scheduler`, `inventory_custodian`, and `raffle_operator`. Junction table `user_roles(user_id, role_code)` maps users to permissions.
- `members`: Stores church member profiles. Key fields include `id`, `first_name`, `last_name`, `phone`, `email`, `birth_date`, `household_id` (foreign key to `households`), `notes`, `active`, `photo_data_url`, and `archived_at`. Indexed by `(last_name, first_name)` and `(active, archived_at)`.
- `member_duty_eligibility`: Tracks member eligibility for specialized Sunday roles (`paw` for Praise and Worship, `elder` for Elders).
- `households` and `ministries`: Manage household address groupings and church ministry affiliations through `member_ministries`.
- `events`: Stores services and special gatherings. Key fields include `id`, `event_type` (`sunday_service`, `special_event`), `title`, `event_date`, `start_time`, `location`, `status` (`draft`, `published`, `closed`, `cancelled`), `allow_repeat_winners`, and `archived_at`.
- `attendance_entries`: Records check-ins for events. Key fields include `id`, `event_id`, `member_id` (optional for guests), `guest_name`, `guest_contact`, `checked_in_at`, and `checked_in_by`. Unique index on `(event_id, member_id)`.
- `service_templates` and `duty_slots`: Define standard Sunday service roles (Kitchen, Pulpit, Prayer).
- `teams` and `team_members`: Group members into PAW groups and Elder groups for duty scheduling.
- `schedule_assignments`: Maps events and duty slots to assigned member or team IDs. Key fields include `event_id`, `duty_slot_id`, `position`, `member_id`, `team_id`, `status`, `locked`, `override_reason`, and `generation_key`.
- `stock_items`: Consumable inventory items. Key fields include `id`, `sku`, `barcode`, `name`, `brand`, `category`, `unit`, `location`, `reorder_level`, `storage_notes`, `photo_data_url`, and `archived_at`.
- `stock_batches`: Manages batch expiration dates for [[FEFO]] inventory ordering. Key fields include `stock_item_id`, `batch_code`, `expiry_date`, and `quantity`. Indexed by `(stock_item_id, expiry_date, created_at)`.
- `inventory_movements`: Immutable log of stock additions, receipts, donations, reservations, issues, returns, losses, and adjustments.
- `assets` and `asset_movements`: Tracks durable church equipment, asset tags, custodian member assignments, condition states, and status transitions (`available`, `reserved`, `checked_out`, `maintenance`, `retired`, `awarded`).
- `raffle_rounds`, `raffle_entrants`, `raffle_draws`: Manages event raffle execution, entrant lists, random winner generation, winner snapshots, confirmation steps, and voiding with reason tracking.
- `scholarship_records`: Tracks per-school-year student grants. Key fields include `school_year`, `member_id`, `education_level` (`high_school`, `college`), `school_name`, `program`, `year_level`, `paw_member_snapshot`, `amount_pesos` (₱500 for PAW members, ₱250 for non-PAW members), `status` (`pending`, `released`, `cancelled`), and `released_at`.
- `bible_bookmarks` and `bible_chat_messages`: Stores bookmarked verses and local/YouVersion Scripture query logs per user.
- `audit_logs`: System audit trail logging action details, actor user ID, entity type/ID, before/after JSON states, and timestamps.
- `settings`: System parameters including `church_name`, `currency`, `timezone`, `default_service_time`, and `last_backup_at`.

## Primary Services and Subsystems

### Authentication and Session Management

Authentication is managed in Rust via `auth.rs`. Passwords and recovery codes are hashed using Argon2 with random salts. Active user sessions are stored in memory in `AppState.sessions` with a 15-minute inactivity expiration window. Failed sign-in attempts increment a counter; reaching 5 consecutive failures triggers a 30-second lockout. Account recovery utilizes a 24-character alphanumeric code generated in Settings.

### Duty Scheduling Engine

The scheduler engine in `schedule.rs` generates Sunday service assignments. PAW members are organized into PAW groups, while Elders form Elder groups. The algorithm rotates PAW groups across Kitchen and Pulpit slots each Sunday. Prayer slots rotate across Elder groups. Manual overrides and assignment locking preserve published decisions while outputting structured vacancy reports if an assigned member is marked unavailable.

### Inventory and Asset Subsystem

Consumable stock items are managed in `inventory.rs` using batch-level First-Expired, First-Out (`[[FEFO]]`) selection. Stock movements enforce non-negative balances. Event allocations reserve stock for upcoming services. Durable assets are tracked individually by tag and serial number in `assets.rs`, logging state transitions from allocation to return or retirement.

### Event Raffle System

Raffle functionality in `raffle.rs` manages event prize draws. Entrants can be synced directly from event attendance or added manually. The system draws winning entrants using secure random selection, snapshots entrant state, verifies repeat winner settings, and records confirmation or voiding events in `raffle_draws`.

### Scholarship Management

Scholarships in `scholarship.rs` process student aid grants. At record creation, the system snapshots the member's PAW classification. Active PAW members qualify for ₱500 per school year, while non-PAW members qualify for ₱250. State changes (`pending` to `released` or `cancelled`) write audit trail entries.

### Backup and Restore System

Database backup and restoration is handled in `backup.rs`. The backup function checkpoints the SQLite WAL file, snapshots the database using SQLite's backup API, packages a JSON envelope with SHA-256 database checksums, and encrypts the output using [[AES-256-GCM]] with Argon2 key derivation. Output files use the `.vojbackup` extension. Restoration creates a pre-restore safety snapshot, validates file integrity, runs database migrations on the restored data, and replaces the working database.

### External API and Bible Tools

Offline Bible search uses embedded WEB (World English Bible) and KJV (King James Version) databases (`bibleDatabase.ts`, `bibleSearchEngine.ts`). Optional online integration with the [[YouVersion API]] is handled in Rust (`bible.rs`) using `reqwest` with `rustls-tls`. Storing the API key in the backend `app_secrets` table keeps credentials hidden from client JavaScript context.

### Data Import Engine

Bulk records import (`importer.rs`) processes CSV and Excel spreadsheets for members, assets, and inventory items. Validation checks field lengths and data types before writing records inside a single transaction.

## Frontend Application Page Breakdown

The UI is a single-page application (`App.tsx`) with hash-based routing (`#/dashboard`, `#/members`, etc.).

- `DashboardPage`: Displays summary metrics, upcoming Sunday events, inventory stock alerts, scholarship release counts, and recent system audit logs.
- `MembersPage`: Directory for member records, household filters, photo uploads, PAW/Elder eligibility management, and spreadsheet import wizard.
- `EventsPage`: Interface to schedule Sunday services and special events, generate recurring Sunday dates, and manage check-in rosters.
- `SchedulePage`: Generates duty rotations, applies manual overrides, locks slot assignments, and displays printable Sunday schedules.
- `AttendancePage`: Check-in interface for church members and guests with live search and timestamp logging.
- `ScholarshipsPage`: Grants tracking table grouped by school year, displaying education levels, PAW status snapshot, disbursement rates, and release controls.
- `InventoryPage`: Consumable items catalog with FEFO batch details, stock movement entry forms, reorder status alerts, and event reservation controls.
- `AssetsPage`: Track durable equipment, tag search, custodian member assignments, condition history, and checkout/return forms.
- `BibleChatPage`: Scripture reader and search interface supporting offline WEB/KJV text, YouVersion API lookup, verse bookmarks, and outline generation.
- `WorshipSongsPage`: Song repository with lyrics viewer, chord display, quick worship drawer, and dual-window live projection presenter (`WorshipPresenterModal.tsx`).
- `RafflePage`: Manages event raffle rounds, entrant registration from attendance lists, animated drawing UI, and winner confirmation.
- `ReportsPage`: Exportable summaries for attendance history, inventory valuation, scholarship distributions, and duty schedules.
- `AuditPage`: Searchable system audit log viewer with entity filters, user action breakdowns, and JSON diff inspection modals.
- `SettingsPage`: Church parameters configuration, user account creation, role assignments, recovery code generation, and encrypted backup/restore controls.

## Security, Data Protection, and Permission Controls

### Data Locality

All application data remains on the local disk. Database files are written to `%APPDATA%\vessel-of-joy\vessel-of-joy.db`. No telemetry or analytics data is transmitted to external servers.

### Role-Based Access Control

Commands invoked from React pass a session token to Rust IPC functions. The `authorize()` helper verifies token validity, checks last activity timestamps, and enforces permission rules against assigned user roles (`administrator`, `secretary`, `scheduler`, `inventory_custodian`, `raffle_operator`).

### Session Security and Inactivity Lock

Sessions expire automatically after 15 minutes of inactivity. Activity listeners on the frontend reset the timer on user interaction, while the Rust backend rejects requests if `last_seen` exceeds 15 minutes.

### Encryption Standards

- User Passwords: Hashed using [[Argon2]] (`argon2` crate) with random salts generated via `OsRng`.
- Database Backups: Encrypted using [[AES-256-GCM]] (`aes-gcm` crate) with key derivation via Argon2 and SHA-256 payload validation.
- API Secrets: Stored in the encrypted backend `app_secrets` table and evaluated exclusively inside Rust code.

### Audit Trail

All system modifications run inside database transactions that execute `audit()` calls. Audit logs capture actor user IDs, actions, entity types, entity IDs, before/after JSON states, and ISO 8601 timestamps.
