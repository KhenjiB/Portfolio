// ─────────────────────────────────────────────────────────────
//  EDIT YOUR PERSONAL INFORMATION HERE
//  Everything on the site (name, links, email, resume) reads from this file.
//  Any value set to '' (empty string) is treated as "not set yet" and the
//  site shows a clearly labeled placeholder instead of a broken link.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: 'Marq Kenjie',
  lastName: 'Buenconsejo',
  fullName: 'Marq Kenjie Aceron Buenconsejo',
  shortName: 'Marq Buenconsejo',
  initials: 'JIE',
  title: 'IT Student | Aspiring Software Developer',
  heroTitle: 'Aspiring Software Developer',
  intro:
    'I build web applications and software solutions that are practical, reliable, and easy to use, from responsive interfaces to the databases behind them.',
  careerGoal:
    'To become a professional software developer and build practical, innovative, and user-friendly applications.',
  location: 'Philippines',
  availability: 'Open to internships and entry-level roles',

  // Contact & social: replace with your real details.
  email: 'marqkenjieaceronpo@gmail.com', 
  github: 'https://github.com/KhenjiB', 
  linkedin: 'https://www.linkedin.com/in/mkbuenconsejo14/?isSelfProfile=true', 

  // Resume: put your PDF in /public (e.g. public/resume.pdf) and set the path.
  resume: '', // e.g. '/resume.pdf'

  // Contact form (optional): paste a Formspree form endpoint to receive messages
  // directly, e.g. 'https://formspree.io/f/abcdwxyz'. If left empty, the form
  // opens the visitor's email app with the message pre-filled (needs `email` above).
  contactFormEndpoint: '',

  // Profile photo: put an image in /public (e.g. public/profile.jpg) and set the path.
  photo: '', // e.g. '/profile.jpg'
}

export const education = [
  {
    school: 'STI College Legazpi',
    degree: 'Bachelor of Science in Information Technology',
    status: 'Fourth-Year Student', // edit as your year level changes
    period: 'Present', // e.g. '2023 – Present'
    description:
      'Coursework and hands-on projects in software development, web technologies, database systems, and systems analysis and design.',
    highlights: [
      'Web-Based School Management Portal (academic project)',
      'Tambayan Café Management System',
      'Student Information System',
      'Object-oriented programming in Java and C#',
      'Relational database design with MySQL',
    ],
  },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
