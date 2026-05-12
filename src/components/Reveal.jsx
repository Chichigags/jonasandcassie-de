import { useReveal } from '../hooks/useReveal'

export function Reveal({
  children,
  className = '',
  delayClass = '',
  as: Tag = 'div',
}) {
  const { ref, isVisible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
