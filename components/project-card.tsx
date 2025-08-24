import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card data-testid="project-card">
      <CardHeader>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400">{project.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.demo && (
            <Button asChild variant="secondary" size="sm">
              <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Live
              </Link>
            </Button>
          )}
          {project.links.repo && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                Repo
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
