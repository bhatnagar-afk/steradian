import type { MetadataRoute } from 'next'
import { getAbsoluteUrl } from '@/config/site'

// Already covered by the `*` rule, but named so the intent to be read and
// cited by AI search is explicit and survives any later tightening of `*`.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: aiCrawlers, allow: '/' },
    ],
    sitemap: getAbsoluteUrl('/sitemap.xml'),
  }
}
