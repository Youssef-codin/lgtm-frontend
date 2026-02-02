import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';

type TailwindSize =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

interface LogoProps {
  size?: TailwindSize;
}

export function Logo({ size = 'text-lg' }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center w-fit logo font-bold tracking-tight',
        size,
      )}
    >
      <span className="text-primary">lg</span>
      <span className="text-foreground">tm</span>
    </Link>
  );
}

