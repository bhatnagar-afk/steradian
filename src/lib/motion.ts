import type { Variants } from 'framer-motion'

/** Standard scroll-reveal used across the editorial homepage sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 0.7, 0.2, 1] },
  },
}

export const fadeUpStagger = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 0.7, 0.2, 1], delay },
  },
})

export const viewportOnce = { once: true, amount: 0.2 } as const
