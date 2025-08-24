'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/container';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <nav className="flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400',
                pathname === item.href
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}
