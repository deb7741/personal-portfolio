import type { IconName } from "@/components/icon";

export const EMAIL = "chowbeydebjyoti@gmail.com";

// Phone number intentionally not published. Visitors reach out by email or LinkedIn.
export const socials: { label: string; href: string; icon: IconName; external: boolean }[] = [
  { label: "GitHub", href: "https://github.com/deb7741", icon: "github", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/debjyotichowbey", icon: "linkedin", external: true },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "envelope", external: false },
];
