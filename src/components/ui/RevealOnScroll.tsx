'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  once?: boolean
}

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom: { duration: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
}

export default function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.65,
  className,
  once = true,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-48px' }}
      custom={{ duration, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
