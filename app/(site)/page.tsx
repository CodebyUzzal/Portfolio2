import Link from 'next/link';
import { site } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { Container } from '@/components/container';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Section className="pt-20 pb-8">
        <Container className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">{site.name}</h1>
          <p className="text-lg text-gray-400">{site.tagline}</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume.txt" download>
                Download Résumé
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6 pt-4">
            <Link href={`mailto:${site.social.email}`} aria-label="Email">
              <Mail className="h-5 w-5 text-gray-400 hover:text-plum-400" />
            </Link>
            <Link href={site.social.github} aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-400 hover:text-plum-400" />
            </Link>
            <Link href={site.social.linkedin} aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-plum-400" />
            </Link>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:justify-center sm:gap-6">
            {site.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-plum-500" />
                {h}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
