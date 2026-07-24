import { useState } from 'react'
import type { ProofLedgerMode, ProofLedgerProject } from '../data'
import { trackPortfolioEvent } from '../analytics'

type ProjectProofLedgerProps = {
  projects: ProofLedgerProject[]
  onOpenCaseStudy: (caseStudyId: string) => void
}

const MODES: Array<{ id: ProofLedgerMode; label: string }> = [
  { id: 'outcome', label: 'Outcome' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'implementation', label: 'Implementation' },
]

export function ProjectProofLedger({
  projects,
  onOpenCaseStudy,
}: ProjectProofLedgerProps) {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? '')
  const [activeMode, setActiveMode] = useState<ProofLedgerMode>('outcome')
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0]

  if (!activeProject) return null

  const activeContent = activeProject.modes[activeMode]

  return (
    <div className="proof-ledger">
      <nav className="proof-ledger-index" aria-label="Select a project to inspect">
        {projects.map((project) => {
          const isActive = project.id === activeProject.id

          return (
              <button
                type="button"
                key={project.id}
              className={isActive ? 'is-active' : undefined}
              aria-pressed={isActive}
                onClick={() => {
                  setActiveProjectId(project.id)
                  trackPortfolioEvent('project_inspected', { project: project.id })
                }}
            >
              <span className="proof-ledger-number">{project.number}</span>
              <span>
                <strong>{project.name}</strong>
                <small>{project.role}</small>
              </span>
              <span className="proof-ledger-inspect" aria-hidden="true">
                {isActive ? 'Open' : 'Inspect'}
              </span>
            </button>
          )
        })}
      </nav>

      <article className="proof-ledger-detail" aria-live="polite">
        <header className="proof-ledger-detail-head">
          <div>
            <p>{activeProject.number} / Selected system</p>
            <h3>{activeProject.statement}</h3>
          </div>
          <div className="proof-ledger-stack" aria-label="Project technologies">
            {activeProject.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </header>

        <div className="proof-ledger-modes" role="group" aria-label={`${activeProject.name} proof view`}>
          {MODES.map((mode) => {
            const isSelected = mode.id === activeMode

            return (
              <button
                type="button"
                aria-pressed={isSelected}
                className={isSelected ? 'is-active' : undefined}
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
              >
                {mode.label}
              </button>
            )
          })}
        </div>

        <div
          className="proof-ledger-panel"
          key={`${activeProject.id}-${activeMode}`}
        >
          <p className="proof-ledger-eyebrow">{activeContent.eyebrow}</p>
          <h4>{activeContent.headline}</h4>
          <p className="proof-ledger-body">{activeContent.body}</p>

          <ol className="proof-ledger-trace" aria-label={`${activeProject.name} technical sequence`}>
            {activeContent.trace.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <footer className="proof-ledger-actions">
          {activeProject.actions.map((action) => (
            action.kind === 'case-study' ? (
              <button
                type="button"
                key={action.label}
                onClick={() => {
                  trackPortfolioEvent('case_study_opened', {
                    project: action.target,
                    location: 'proof_ledger',
                  })
                  onOpenCaseStudy(action.target)
                }}
              >
                {action.label}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <a
                href={action.target}
                target="_blank"
                rel="noopener noreferrer"
                key={action.label}
                onClick={() => trackPortfolioEvent('live_project_opened', {
                  project: activeProject.id,
                  location: 'proof_ledger',
                })}
              >
                {action.label}
                <span aria-hidden="true">↗</span>
              </a>
            )
          ))}
        </footer>
      </article>
    </div>
  )
}
