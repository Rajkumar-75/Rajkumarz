import { useRef } from 'react';

/**
 * A button/anchor wrapper that adds a ripple effect on click.
 * Pass `as="a"` plus `href` to render an anchor, otherwise renders a <button>.
 */
export default function RippleButton({
  as = 'button',
  className = '',
  children,
  onClick,
  ...rest
}) {
  const ref = useRef(null);

  const handleClick = (e) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const span = document.createElement('span');
      span.className = 'ripple-span';
      span.style.width = span.style.height = `${size}px`;
      span.style.left = `${e.clientX - rect.left - size / 2}px`;
      span.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(span);
      setTimeout(() => span.remove(), 650);
    }
    onClick?.(e);
  };

  const Tag = as;

  return (
    <Tag ref={ref} className={className} onClick={handleClick} {...rest}>
      {children}
    </Tag>
  );
}
