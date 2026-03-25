import { Icon } from './Icon';

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
interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  variant?: 'default' | 'filled' | 'ghost' | 'error';
  size?: 'sm' | 'md' | 'lg';
  iconFilled?: boolean;
  className?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  onClick,
  label,
  variant = 'default',
  size = 'md',
  iconFilled = false,
  className = '',
  disabled = false,
}: IconButtonProps) {
  const variants: Record<'default' | 'filled' | 'ghost' | 'error', string> = {
    default: 'hover:bg-surface-container-high text-on-surface-variant',
    filled: 'bg-primary-container text-on-primary-container hover:opacity-90',
    ghost: 'text-white/80 hover:bg-white/10',
    error: 'text-error-container hover:bg-white/10',
  };
  const sizes: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  const iconSizes: Record<'sm' | 'md' | 'lg', 'sm' | 'md' | 'lg'> = { sm: 'sm', md: 'md', lg: 'lg' };

  return (
    <button
      aria-label={label || icon}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizes[size]} flex items-center justify-center rounded-xl transition-all duration-150
        active:scale-90 disabled:opacity-30
        ${variants[variant]} ${className}
      `}
    >
      <Icon name={icon} filled={iconFilled} size={iconSizes[size]} />
    </button>
  );
}