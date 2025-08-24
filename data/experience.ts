export interface ExperienceItem {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Developer',
    company: 'TechCorp',
    start: '2022',
    end: 'Present',
    bullets: [
      'Led migration to Next.js for flagship product.',
      'Improved performance by 40% through code splitting.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Web Solutions',
    start: '2020',
    end: '2022',
    bullets: [
      'Built internal tools with Angular and .NET.',
      'Mentored junior developers on best practices.',
    ],
  },
];
