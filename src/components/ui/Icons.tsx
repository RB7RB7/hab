import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaultProps = (size = 24): IconProps => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function ArrowRight({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function ArrowUpRight({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function Check({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function XMark({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Plus({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Play({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props} fill="currentColor" stroke="none">
      <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z" />
    </svg>
  );
}

export function Pause({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props} fill="currentColor" stroke="none">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  );
}

export function Star({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props} fill="currentColor" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Shield({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function Sparkle({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export function Smile({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

export function Menu({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function ChevronDown({ size = 24, ...props }: IconProps) {
  return (
    <svg {...defaultProps(size)} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export const iconMap = {
  shield: Shield,
  sparkle: Sparkle,
  smile: Smile,
  star: Star,
  check: Check,
  arrow: ArrowRight,
} as const;
