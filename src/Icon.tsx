import { IconProps } from "./types";

/**
 * Icon — wraps Material Symbols Outlined
 * @param {string} name - icon name
 * @param {string} [className]
 * @param {boolean} [filled]
 * @param {string} [size] - 'sm' | 'md' | 'lg' | 'xl'
 * @param {object} [style] - additional inline styles
 */
export function Icon({ name, className = '', filled = false, size = 'md', style = {} }: IconProps) {
  const sizeMap: Record<'sm' | 'md' | 'lg' | 'xl', string> = { sm: 'text-[18px]', md: 'text-[22px]', lg: 'text-[28px]', xl: 'text-[36px]' };
  const fill = filled ? "'FILL' 1" : "'FILL' 0";
  return (
    <span
      className={`material-symbols-outlined leading-none select-none ${sizeMap[size]} ${className}`}
      style={{ ...style, fontVariationSettings: `${fill}, 'wght' 400, 'GRAD' 0, 'opsz' 24` }}
    >
      {name}
    </span>
  );
}