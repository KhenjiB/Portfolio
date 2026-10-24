// ─────────────────────────────────────────────────────────────
//  PROJECTS
//  To add a project, copy one object and edit it.
//  - repo / demo: leave '' until a real link exists. The card will show
//    "Repo coming soon" / "Not deployed" instead of a fake link.
//  - image: put a screenshot in /public/projects/ and set e.g.
//    '/projects/school-portal.png'. Leave '' to use the generated visual.
//  - category: used by the filter buttons.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'school-portal',
    title: 'Malilipot Central School Portal',
    category: 'Web App',
    description:
      'A centralized school management platform designed to help manage academic, administrative, and communication processes.',
    details:
      'Brings academic records, administrative tasks, and school announcements into one platform. Each user role sees the tools and information relevant to them, which keeps school information organized and in one place.',
    highlight: 'Role-based access and centralized school information management.',
    tech: ['React', 'TailwindCSS', 'TypeScript', 'Supabase', 'PostreSQL'],
    image: '/projects/Malilipot.png',
    repo: '',
    demo: 'https://malilipot-central-school.vercel.app/',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'tambayan-cafe',
    title: 'Tambayan Café Management System',
    category: 'Web App',
    description:
      'A web-based café application with customer, staff, and administrator features.',
    details:
      'Customers browse the menu, add items to a cart, and track their orders. Staff and administrators get dedicated dashboards for managing orders and the menu, all behind authenticated accounts.',
    highlight:
      'Menu browsing, authentication, cart functionality, order tracking, and role-based dashboards.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    image: '',
    repo: '',
    demo: '',
    accent: 'from-amber-400 to-rose-500',
  },
  {
    id: 'student-info-system',
    title: 'Student Information System',
    category: 'Information System',
    description:
      'An academic project for organizing student records and related information.',
    details:
      'Stores and manages student records with full create, read, update, and delete operations, giving a clear structure to information that would otherwise be scattered across files.',
    highlight: 'Structured information management and CRUD operations.',
    tech: ['Java', 'PHP', 'MySQL'], // update to the actual stack used
    image: '',
    repo: '',
    demo: '',
    accent: 'from-violet-500 to-fuchsia-500',
  },
]
