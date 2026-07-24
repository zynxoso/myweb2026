---
tags:
  - developer-profile
  - coding-patterns
  - design-system
  - architecture
  - react
  - typescript
  - obsidian-knowledge
type: developer-patterns
date: 2026-07-23
---
---
tags:
  - coding-style
  - code-patterns
  - react
  - typescript
  - obsidian-knowledge
type: coding-style-guide
date: 2026-07-23
---

# 💻 Coding Style & Syntax Patterns

> [!NOTE]
> Focused reference note detailing exact code structure, syntax conventions, state patterns, and defensive programming habits used across your codebases.

---

## 1. Syntax & Formatting Style

- **Semicolon-free TypeScript:** Writes code without trailing semicolons.
- **Explicit Type Discriminants:** Uses narrow union string literals for state flags instead of loose strings or booleans (`'all' | 'certs' | 'projects'`, `'masonry' | 'inspector'`).
- **Inline Component Embedding in Data Contracts:** Integrates React icon components (`JSX.Element`) directly inside static data objects (`icon: <Code2 className="w-4 h-4" />`).
- **Early Return Guard Clauses:** Uses early returns to handle error states and loading flags before rendering primary markup.

---

## 2. State & Initialization Patterns

### 2.1 Lazy Defensive State Initialization
Uses initializer functions inside `useState` to safely evaluate browser APIs without throwing uncaught runtime exceptions during render.

```typescript
const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
  } catch {
    // Falls back gracefully if storage is blocked
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
})
```

### 2.2 Staged Initialization Sequence
Chains nested timers inside `useEffect` to manage multi-step loading transitions cleanly.

```typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false)
    const introTimer = setTimeout(() => {
      setIsIntroComplete(true)
    }, 500)
    return () => clearTimeout(introTimer)
  }, 2000)
  return () => clearTimeout(timer)
}, [])
```

---

## 3. Event & Lifecycle Handling Style

### 3.1 Window Listener Cleanup Pattern
Always pairs global event listeners with explicit teardown returns in `useEffect` to prevent memory leaks and duplicate listeners.

```typescript
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setActiveImage(null)
  }
  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [])
```

### 3.2 Accessible Dual Event Handlers
Attaches keyboard fallbacks (`onKeyDown`) whenever non-button elements trigger actions, checking for `Enter` and `Space` keys.

```tsx
<button
  onClick={() => window.location.reload()}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      window.location.reload()
    }
  }}
>
  Reload Page
</button>
```

---

## 4. Error Handling & Storage Safeguards

### 4.1 Non-Blocking Storage Mutations
Wraps browser storage updates inside `try/catch` blocks to support private browsing or restricted iframe contexts.

```typescript
useEffect(() => {
  try {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  } catch {
    // Fallback when storage is restricted
    document.documentElement.classList.toggle('dark', isDarkMode)
  }
}, [isDarkMode])
```

### 4.2 Class-Based Error Boundary Fallback
Uses class components for top-level error boundaries to isolate component crashes and provide explicit reload actions.

```tsx
export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2>Something went wrong.</h2>
          <button onClick={() => window.location.reload()}>Reload Page</button>
        </div>
      )
    }
    return this.props.children
  }
}
```

---

## 5. Data Contracting & Component Separation

### 5.1 Centralized Typed Data Schema (`data.tsx`)
Separates UI content from display components by defining data schemas in a dedicated file.

```typescript
export const DATA = {
  profile: {
    name: "Jan Harry Madrona",
    title: "Full Stack & Web Developer",
  },
  skills: {
    technical: [
      { name: "React", tag: "Frontend", icon: <Code2 className="w-4 h-4" /> }
    ]
  }
}
```

### 5.2 Explicit Tab State Machine
Replaces heavy router packages with simple string state triggers to control view switching.

```typescript
const [activeTab, setActiveTab] = useState('main')

const toggleTab = (tab: string) => {
  setActiveTab(tab)
  setIsMenuOpen(false)
}
```

---

## 6. Style Summary Checklist

- [x] No semicolons at line ends.
- [x] Strict TypeScript types and string union literals.
- [x] `try/catch` wrapper around all `localStorage` access.
- [x] Clean teardowns on all `useEffect` window listeners.
- [x] Dual `onClick` + `onKeyDown` handlers for accessible controls.
- [x] Centralized data store (`data.tsx`) containing both content and React icons.
