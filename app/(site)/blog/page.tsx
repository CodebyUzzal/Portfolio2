import Link from 'next/link';
import { posts } from '@/data/posts';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  return (
    <Section>
      <Container>
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link className="text-slate-400 hover:underline" href={`/blog/${p.slug}`}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
