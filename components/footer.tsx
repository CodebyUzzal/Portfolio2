import { Container } from '@/components/container';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border/40 bg-background/60 backdrop-blur py-6">
      <Container className="text-center text-sm text-foreground/60">
        © {new Date().getFullYear()} {site.name}
      </Container>
    </footer>
  );
}
