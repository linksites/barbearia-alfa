import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/animations'

// Wrapper simples de revelação no scroll. Aceita variantes e delay.
export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  as = 'div',
  className = '',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
