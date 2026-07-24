import { track } from '@vercel/analytics'

type AnalyticsProperties = Record<string, string | number | boolean | null>

export function trackPortfolioEvent(
  name: string,
  properties: AnalyticsProperties = {},
) {
  if (typeof window === 'undefined') return

  window.dispatchEvent(new CustomEvent('portfolio:analytics', {
    detail: { name, properties },
  }))

  if (import.meta.env.PROD) {
    track(name, properties)
  }
}
