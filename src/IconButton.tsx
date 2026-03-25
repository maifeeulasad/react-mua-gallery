import { Icon } from './Icon';
import { IconButtonProps } from './types';

/**
 * IconButton — a circular/rounded icon button with hover states
 * @param {string} icon
 * @param {function} onClick
 * @param {string} [label] - aria-label
 * @param {string} [variant] - 'default' | 'filled' | 'ghost' | 'error'
 * @param {string} [size] - 'sm' | 'md' | 'lg'
 * @param {boolean} [iconFilled]
 * @param {string} [className]
 */
export function IconButton({ icon, label, onClick, variant = "default", size = "md", iconFilled = false, disabled = false, className = "" }: IconButtonProps) {
  const sz = { sm: 32, md: 40, lg: 44 }[size as "sm" | "md" | "lg"] || 40;
  const iconSz: "sm" | "md" | "lg" = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
  const bg = {
    default: "rgba(0,0,0,0)",
    filled: "var(--primary-container)",
    ghost: "rgba(255,255,255,0.08)",
    error: "rgba(0,0,0,0)",
    dark: "rgba(0,0,0,0.25)",
  }[variant];
  const color = {
    default: "var(--on-surface-variant)",
    filled: "var(--on-primary-container)",
    ghost: "rgba(255,255,255,0.85)",
    error: "var(--error-container)",
    dark: "rgba(255,255,255,0.85)",
  }[variant];
  const hoverBg = {
    default: "var(--surface-high)",
    filled: "var(--primary-container)",
    ghost: "rgba(255,255,255,0.14)",
    error: "rgba(255,255,255,0.08)",
    dark: "rgba(255,255,255,0.14)",
  }[variant];

  return (
    <button
      aria-label={label || icon}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        width: sz, height: sz,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 12, border: "none", cursor: disabled ? "default" : "pointer",
        background: bg, color,
        transition: "all 150ms ease",
        opacity: disabled ? 0.3 : 1,
        flexShrink: 0,
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { if (!disabled) e.currentTarget.style.background = hoverBg ?? ""; }}
      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.background = bg ?? ""; }}
    >
      <Icon name={icon} filled={iconFilled} size={iconSz} />
    </button>
  );
}