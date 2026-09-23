'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HeroDiagram } from '@/components/illustrations'

export function Hero() {
  // Tracks whole-page scroll rather than `target: heroRef` — the latter makes
  // Framer Motion warn in dev because the implicit scroll container (<html>)
  // is `position: static`. Clamping to the first 600px gives the same subtle
  // parallax without that warning.
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 90], { clamp: true })

  return (
    <section className="st-hero" id="hero" aria-label="Introduction">
      <motion.div className="st-hero-media" style={{ y }} aria-hidden="true">
        <HeroDiagram />
      </motion.div>
      <div className="st-hero-veil" aria-hidden="true" />
      <div className="st-hero-content">
        <p className="st-eyebrow st-hero-eyebrow">Architecture — Interiors — Design-Build</p>
        <h1 className="st-hero-h1">
          Steradian
          <br />
          Architects
        </h1>
        <p className="st-hero-line">Architecture that holds its ground in time.</p>
      </div>
      <div className="st-hero-foot">
        <span>Est. 1984 — Moradabad, India</span>
        <span className="st-hero-scroll">
          <span className="st-hero-scroll-stem" aria-hidden="true" />
          Scroll
        </span>
      </div>
    </section>
  )
}
