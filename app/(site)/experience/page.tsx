import { experience } from '@/data/experience';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Timeline } from '@/components/timeline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
};

export default function ExperiencePage() {
  return (
    <Section>
      <Container>
        <Timeline items={experience} />
      </Container>
    </Section>
  );
}
