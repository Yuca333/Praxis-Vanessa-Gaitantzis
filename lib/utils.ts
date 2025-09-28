// This is a simplified version of shadcn's cn utility.
// For a more robust solution that handles Tailwind class conflicts,
// you would typically use `clsx` and `tailwind-merge`.
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}
