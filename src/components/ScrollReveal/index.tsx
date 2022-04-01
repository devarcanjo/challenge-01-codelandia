import React, { useRef, useEffect, FC, CSSProperties } from 'react'
import scrollReveal from 'scrollreveal'

interface ScrollRevealProps {
  style?: CSSProperties
  delay?: number
}

const ScrollReveal: FC<ScrollRevealProps> = ({ children, style, delay }) => {
  const sectionRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: delay
      })
  }, [])

  return (
    <section
      ref={sectionRef}
      style={style}
      className="container scroll-section"
      data-testid="section"
    >
      {children}
    </section>
  )
}

export default ScrollReveal
