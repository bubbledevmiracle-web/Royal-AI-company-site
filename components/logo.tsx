import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  scrolled?: boolean;
  showText?: boolean;
}

export function Logo({ className, scrolled = false, showText = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-lg"
      >
        <defs>
          <linearGradient id="gemTop" x1="22" y1="4" x2="22" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="gemLeft" x1="6" y1="18" x2="22" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1D4ED8" />
            <stop offset="1" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="gemRight" x1="38" y1="18" x2="22" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="gemHighlight" x1="14" y1="6" x2="26" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#DBEAFE" stopOpacity="0.8" />
            <stop offset="1" stopColor="#93C5FD" stopOpacity="0" />
          </linearGradient>
          <filter id="gemShadow" x="-4" y="-2" width="52" height="52" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1E3A8A" floodOpacity="0.4" />
          </filter>
        </defs>

        <g filter="url(#gemShadow)">
          {/* Top facet */}
          <path d="M22 3 L35 18 L22 20 L9 18 Z" fill="url(#gemTop)" />
          {/* Left facet */}
          <path d="M9 18 L22 20 L22 40 L6 22 Z" fill="url(#gemLeft)" />
          {/* Right facet */}
          <path d="M35 18 L22 20 L22 40 L38 22 Z" fill="url(#gemRight)" />
          {/* Center top highlight */}
          <path d="M22 3 L28 12 L22 20 L16 12 Z" fill="url(#gemHighlight)" />
          {/* Edge highlights for 3D effect */}
          <path d="M22 3 L35 18 L22 20 L9 18 Z" stroke="#93C5FD" strokeWidth="0.5" opacity="0.6" />
          <path d="M22 20 L22 40" stroke="#60A5FA" strokeWidth="0.5" opacity="0.5" />
          {/* Sparkle */}
          <circle cx="16" cy="10" r="1" fill="#fff" opacity="0.7" />
        </g>
      </svg>

      {showText && (
        <span
          className={cn(
            'text-2xl font-extrabold tracking-tight transition-colors',
            scrolled ? 'text-3d-dark' : 'text-3d'
          )}
          style={{ fontWeight: 800 }}
        >
          Royal AI
        </span>
      )}
    </div>
  );
}
