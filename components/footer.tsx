import { Container } from '@/components/container';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 py-6">
      <Container className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {site.name}
      </Container>
    </footer>
  );
}
