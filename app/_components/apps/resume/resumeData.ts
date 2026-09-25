export interface TimelineItem {
  title: string
  org: string
  period: string
  bullets: string[]
}

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Senior Fullstack Developer',
    org: 'Company Name',
    period: '2024 – Present',
    bullets: [
      'Architected and shipped multiple full-product features across a Next.js + Node.js stack',
      'Led performance optimizations reducing page load by 40%',
      'Mentored junior developers and ran weekly code reviews',
    ],
  },
  {
    title: 'Fullstack Developer',
    org: 'Previous Company',
    period: '2022 – 2024',
    bullets: [
      'Built RESTful APIs consumed by web and mobile clients',
      'Migrated a legacy monolith to a service-oriented architecture',
      'Owned the PostgreSQL schema design and query optimization',
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'Startup',
    period: '2020 – 2022',
    bullets: [
      'Developed responsive UIs with React and TypeScript',
      'Collaborated closely with designers to implement pixel-perfect interfaces',
      'Integrated third-party APIs and payment systems',
    ],
  },
]

export const EDUCATION: TimelineItem[] = [
  {
    title: 'B.Sc. Computer Science',
    org: 'University Name',
    period: '2016 – 2020',
    bullets: ['Focused on software engineering and distributed systems'],
  },
]

export const SKILLS_GROUPS = [
  { label: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
  { label: 'Backend',   items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { label: 'Database',  items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { label: 'Tools',     items: ['Git', 'Docker', 'CI/CD', 'Linux'] },
]
