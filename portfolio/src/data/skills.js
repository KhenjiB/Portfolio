import { Layout, Server, Database, Wrench } from 'lucide-react'

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Interfaces that are responsive, accessible, and fast.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    description: 'Server-side logic and APIs that connect the pieces.',
    skills: ['PHP', 'C#', 'Java', 'REST APIs'],
  },
  {
    title: 'Database Management',
    icon: Database,
    description: 'Structured data modeling, queries, and integrity.',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools and Platforms',
    icon: Wrench,
    description: 'The everyday workflow for building and shipping.',
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
]
