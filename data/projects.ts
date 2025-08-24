export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { demo?: string; repo?: string };
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Minimal personal site built with Next.js and Tailwind.',
    tech: ['Next.js', 'Tailwind'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task management app using Angular and .NET API.',
    tech: ['Angular', '.NET', 'PostgreSQL'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'E-commerce Store',
    description: 'Headless commerce storefront with Stripe integration.',
    tech: ['Next.js', 'Stripe'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Realtime Chat',
    description: 'Cross-platform chat app with WebSocket and Redis.',
    tech: ['React', 'Node.js', 'Redis'],
    links: { demo: '#', repo: '#' },
  },
];
