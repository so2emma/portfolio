export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  repo: string;
  description: string;
  tags: string[];
  githubUrl: string;
  language: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  link?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  type: 'linkedin' | 'email' | 'phone' | 'external';
  display: string;
}

export interface EcgModeConfig {
  range: [number, number];
  amp: number;
  jitter: number;
  label: string;
}

export const PORTFOLIO_DATA = {
  name: "Emmanuel Oso",
  role: "Backend Software Engineer",
  tagline: "I write Java and PHP for systems that move money.",
  summary: [
    "I write Java and PHP for systems that move money.",
    "Currently building gateway and onboarding infrastructure at NIBSS, Nigeria's inter-bank settlement backbone. Before that, payment switching at eTranzact.",
    "Don't take my word for it. Look below.",
  ],
  asciiArt: `   ____   _____  ____    ______ __  __ __  __          _   _ _    _ ______ _       
  / __ \\ / ____|/ __ \\  |  ____|  \\/  |  \\/  |   /\\   | \\ | | |  | |  ____| |      
 | |  | | (___ | |  | | | |__  | \\  / | \\  / |  /  \\  |  \\| | |  | | |__  | |      
 | |  | |\\___ \\| |  | | |  __| | |\\/| | |\\/| | / /\\ \\ | . \` | |  | |  __| | |      
 | |__| |____) | |__| | | |____| |  | | |  | |/ ____ \\| |\\  | |__| | |____| |____  
  \\____/|_____/ \\____/  |______|_|  |_|_|  |_/_/    \\_\\_| \\_|\\____/|______|______| `,
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emmanuel-oso-308980215/",
      type: "linkedin",
      display: "linkedin.com/in/emmanuel-oso-308980215",
    },
    {
      label: "Email",
      href: "mailto:osoemmanuel1969@gmail.com",
      type: "email",
      display: "osoemmanuel1969@gmail.com",
    },
  ] as SocialLink[],
  experiences: [
    {
      id: "01",
      role: "Software Engineer",
      company: "NIBSS",
      startDate: "Jun 2025",
      endDate: "Present",
      description:
        "Built a centralized gateway handling authentication, rate limiting, and request redirection across the switching platform, plus an automated onboarding pipeline that replaced manual setup for institutions joining the National Payment Stack.",
      tags: ["Java", "Spring Boot", "API Gateway"],
    },
    {
      id: "02",
      role: "Software Engineer",
      company: "eTranzact International",
      startDate: "Jan 2024",
      endDate: "Jun 2025",
      description:
        "Built a mock banking application simulating real-time transaction processing, cutting merchant-integration debugging time by 40%. Refactored legacy payment modules to support dynamic tax and revenue-collection APIs.",
      tags: ["Java", "PHP", "Payments"],
    },
    {
      id: "03",
      role: "Software Engineer Intern",
      company: "Qucoon Academy",
      startDate: "Jan 2025",
      endDate: "Apr 2025",
      description:
        "Designed RESTful APIs and layered microservices in Spring Boot. Wrote normalized MySQL schemas, complex queries, and stored procedures for optimized data retrieval.",
      tags: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: "04",
      role: "Backend Developer Intern",
      company: "Astract 9 Designs",
      startDate: "Sep 2022",
      endDate: "Aug 2023",
      description:
        "Implemented API routes with Laravel Resource Controllers, built form validation and error handling, and learned Eloquent relationships, migrations, and seeders from the ground up.",
      tags: ["PHP", "Laravel"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: "01",
      name: "Unc-Gateway",
      repo: "so2emma/Unc-Gateway",
      description:
        "Centralized API gateway prototype handling microservice request routing, security, and redirection.",
      tags: ["Java", "Spring Boot", "API Gateway"],
      githubUrl: "https://github.com/so2emma/Unc-Gateway",
      language: "Java",
    },
    {
      id: "02",
      name: "scaffy",
      repo: "so2emma/scaffy",
      description:
        "Java-based project scaffolding and code generation tool designed to accelerate backend microservice development.",
      tags: ["Java", "CLI", "Developer Tools"],
      githubUrl: "https://github.com/so2emma/scaffy",
      language: "Java",
    },
    {
      id: "03",
      name: "rentflow-backend",
      repo: "so2emma/rentflow-backend",
      description:
        "Robust backend microservice for property lifecycle management and financial transaction workflows.",
      tags: ["Java", "Spring Boot", "REST API"],
      githubUrl: "https://github.com/so2emma/rentflow-backend",
      language: "Java",
    },
    {
      id: "04",
      name: "rentflow-frontend",
      repo: "so2emma/rentflow-frontend",
      description:
        "Modern frontend web interface for the RentFlow property and payment management platform.",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/so2emma/rentflow-frontend",
      language: "TypeScript",
    },
  ] as ProjectItem[],
  education: {
    degrees: [
      {
        title: "BSc Computer Science",
        institution: "Covenant University",
        period: "2019–2023",
        link: "#",
      },
    ] as EducationItem[],
    certificationsTitle: "certifications — TeSA, 2025",
    certifications: [
      { title: "Software Engineering", issuer: "TeSA", year: "2025", link: "#" },
      { title: "Software Architecture", issuer: "TeSA", year: "2025", link: "#" },
      { title: "Basic Accounting", issuer: "TeSA", year: "2025", link: "#" },
      { title: "Presentation Skills", issuer: "TeSA", year: "2025", link: "#" },
    ] as CertificationItem[],
  },
  ecgModes: {
    rest: { range: [58, 78], amp: 1.0, jitter: 0.02, label: "resting" },
    active: { range: [122, 158], amp: 0.85, jitter: 0.03, label: "active" },
    stress: { range: [92, 118], amp: 1.1, jitter: 0.16, label: "stress" },
    idle: { range: [0, 0], amp: 0.0, jitter: 0.0, label: "idle" },
  } as Record<'rest' | 'active' | 'stress' | 'idle', EcgModeConfig>,
};
