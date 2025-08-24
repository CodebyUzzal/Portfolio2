import Image from 'next/image';
import { site } from '@/data/site';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { SkillsGrid } from '@/components/skills-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Image
            src="/profile.svg"
            alt={site.name}
            width={120}
            height={120}
            className="rounded-full"
          />
          <p className="max-w-prose text-gray-300">
            Based in {site.location}, {site.name} focuses on Angular, .NET, and
            modern web technologies to build performant products.
          </p>
        </div>
        <SkillsGrid />
      </Container>
    </Section>
  );
}
