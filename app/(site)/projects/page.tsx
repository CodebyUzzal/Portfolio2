'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Badge } from '@/components/ui/badge';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const tags = Array.from(new Set(projects.flatMap((p) => p.tech)));
  const filtered = filter ? projects.filter((p) => p.tech.includes(filter)) : projects;

  return (
    <Section>
      <Container className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <Badge
            onClick={() => setFilter(null)}
            className={filter === null ? 'bg-plum-600 text-white' : 'cursor-pointer'}
          >
            All
          </Badge>
          {tags.map((t) => (
            <Badge
              key={t}
              onClick={() => setFilter(t === filter ? null : t)}
              className={filter === t ? 'bg-plum-600 text-white' : 'cursor-pointer'}
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
