export const site = {
  name: 'Uzzal Rahman',
  tagline: 'I build clean, fast, scalable web apps.',
  location: 'Dhaka, Bangladesh',
  url: 'https://example.com',
  nav: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  social: {
    email: 'uzzal@example.com',
    github: 'https://github.com/uzzalrahman',
    linkedin: 'https://www.linkedin.com/in/uzzalrahman',
  },
  highlights: [
    'Angular /.NET specialist delivering scalable solutions.',
    'Next.js & Tailwind CSS enthusiast.',
    'Passionate about clean design and performance.',
  ],
};

export type NavItem = (typeof site.nav)[number];
