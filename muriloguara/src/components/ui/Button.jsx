// Botão/Link com variantes da marca. Renderiza <a> quando há href.
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const cls = `${variant === 'ghost' ? 'btn-ghost' : 'btn-primary'} ${className}`
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
