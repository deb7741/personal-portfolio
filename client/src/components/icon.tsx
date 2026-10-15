import {
  ArrowRight,
  Award,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  Code,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Laptop,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Menu,
  Send,
  Settings,
  Star,
  Telescope,
  Trophy,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

/**
 * Tree-shaken SVG icons. Replaces the full Font Awesome stylesheet + webfonts
 * that were loaded from a CDN on every page view.
 */
const icons = {
  "arrow-right": ArrowRight,
  award: Award,
  certificate: BadgeCheck,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  clock: Clock,
  code: Code,
  microchip: Cpu,
  download: Download,
  "external-link": ExternalLink,
  file: FileText,
  github: Github,
  "graduation-cap": GraduationCap,
  "laptop-code": Laptop,
  linkedin: Linkedin,
  envelope: Mail,
  "map-marker": MapPin,
  medal: Medal,
  bars: Menu,
  "paper-plane": Send,
  cogs: Settings,
  star: Star,
  telescope: Telescope,
  trophy: Trophy,
  tools: Wrench,
  times: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export default function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  const Component = icons[name];
  return <Component className={`inline-block shrink-0 ${className}`} aria-hidden="true" />;
}
