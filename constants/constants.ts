import type { Variants } from "motion/react";
import type {
  Education,
  Experience,
  Project,
  SocialLink,
  TechLogo,
} from "../types/types";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      mass: 0.5,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const springConfig = {
  mass: 0.5,
  stiffness: 100,
  damping: 15,
};

export const colors = {
  background: "#060010",
  border: "hsl(240, 6%, 25%)", // neutral-700
  card: "hsl(240, 10%, 8%)", // neutral-900
  muted: "hsl(240, 5%, 15%)",
  accent: "hsl(240, 100%, 65%)",
};

export const personalInfo = {
  name: "Shaik Aftab",
  title: "Software Developer",
  tagline: "Building exceptional digital experiences with modern technologies",
  email: "shaikaftab005@gmail.com",
  location: "Hyderabad, India",
  bio: "Passionate software developer with expertise in building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.",
  resumeUrl: "https://example.com/resume.pdf",
};

export const skillCategories = {
  "Programming Languages": [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "C++",
    "C",
  ],

  "Frontend Core": [
    "React",
    "Next.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Motion/Framer Motion",
    "Redux/Zustand",
    "Tanstack Query",
  ],
  "Backend & Database": [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "REST APIs",
    "Redis",
  ],
  "Technologies & Cloud": ["Git", "GitHub", "Linux", "Docker", "AWS", "Vercel"],
};

// Experience
export const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Full Stack Developer",
    startDate: "Jan 2023",
    endDate: "Present",
    achievements: [
      "Led development of a customer-facing SaaS platform serving 10,000+ users",
      "Reduced page load times by 60% through code splitting and optimization",
      "Mentored 3 junior developers and established code review best practices",
      "Architected microservices infrastructure reducing deployment time by 40%",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Digital Solutions Co.",
    role: "Full Stack Developer",
    startDate: "Jun 2021",
    endDate: "Dec 2022",
    achievements: [
      "Built responsive web applications for clients across various industries",
      "Implemented real-time features using WebSockets and Server-Sent Events",
      "Improved application performance by 45% through database optimization",
      "Collaborated with designers to create pixel-perfect UI implementations",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    company: "Startup Ventures",
    role: "Junior Developer",
    startDate: "Jan 2020",
    endDate: "May 2021",
    achievements: [
      "Developed and maintained 5+ client websites using modern frameworks",
      "Participated in Agile development processes and daily standups",
      "Created reusable component libraries to speed up development",
      "Gained experience with testing frameworks and CI/CD pipelines",
    ],
    technologies: ["JavaScript", "React", "Vue.js", "Firebase", "Git"],
  },
];

// Projects
export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration, inventory management, and admin dashboard",
    longDescription:
      "Built a complete e-commerce solution with Stripe payment processing, real-time inventory tracking, customer authentication, order management, and a comprehensive admin panel. Features include product search, filtering, cart management, and email notifications.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "Resend",
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    category: "Web",
    imageUrl: "/projects/ecommerce.jpg",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features",
    longDescription:
      "A Trello-like task management application with drag-and-drop functionality, real-time collaboration using WebSockets, team workspaces, deadline tracking, and notifications. Includes calendar integration and activity logs.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Redux",
      "Material UI",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-app-demo.vercel.app",
    featured: true,
    category: "Web",
    imageUrl: "/projects/taskapp.jpg",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered tool for generating blog posts, social media content, and marketing copy",
    longDescription:
      "Leverages OpenAI's GPT models to generate high-quality content for various purposes. Features include customizable tone and style, content templates, SEO optimization suggestions, and export to multiple formats.",
    technologies: [
      "Next.js",
      "OpenAI API",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    liveUrl: "https://ai-content-demo.vercel.app",
    featured: true,
    category: "AI/ML",
    imageUrl: "/projects/ai-content.jpg",
  },
  {
    title: "Weather Dashboard",
    description:
      "Beautiful weather app with forecasts, maps, and location-based alerts",
    longDescription:
      "A comprehensive weather application featuring 7-day forecasts, interactive weather maps, severe weather alerts, location search with autocomplete, and weather history. Data visualization with charts and animations.",
    technologies: [
      "React",
      "OpenWeather API",
      "Recharts",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-app-demo.vercel.app",
    featured: false,
    category: "Web",
    imageUrl: "/projects/weather.jpg",
  },
];

// Education
export const education: Education[] = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2016",
    endDate: "2020",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "Led university coding club with 50+ members",
      "Winner of Regional Hackathon 2019",
      "Published research paper on machine learning applications",
    ],
  },
  {
    institution: "Tech Academy",
    degree: "Certificate",
    field: "Full Stack Web Development",
    startDate: "2019",
    endDate: "2020",
    achievements: [
      "Completed 500+ hours of intensive coding bootcamp",
      "Built 10+ full-stack applications",
      "Mentored beginner students",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Aftab3008",
    icon: "Github",
    handle: "@Aftab3008",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aftab005",
    icon: "Linkedin",
    handle: "@aftab005",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/shaikaftab769879",
    icon: "Twitter",
    handle: "@shaikaftab769879",
  },
  {
    name: "Email",
    url: "mailto:shaikaftab005@gmail.com",
    icon: "Mail",
    handle: "shaikaftab005@gmail.com",
  },
];

// Section IDs for navigation
export const sections = {
  hero: "hero",
  skills: "skills",
  experience: "experience",
  projects: "projects",
  education: "education",
  contact: "contact",
};

export const techLogos: TechLogo[] = [
  // Programming Languages & Frameworks
  { icon: "/icons/java.svg", title: "Java" },
  { icon: "/icons/python.svg", title: "Python" },
  { icon: "/icons/c-plusplus.svg", title: "C++" },
  // Frontend
  { icon: "/icons/typescript.svg", title: "TypeScript" },
  { icon: "/icons/javascript.svg", title: "JavaScript" },
  { icon: "/icons/react_dark.svg", title: "React" },
  { icon: "/icons/nextjs_logo_dark.svg", title: "Next.js" },
  { icon: "/icons/tailwindcss.svg", title: "Tailwind CSS" },
  // State Management
  { icon: "/icons/redux.svg", title: "Redux" },
  // Backend
  { icon: "/icons/nodejs.svg", title: "Node.js" },
  { icon: "/icons/expressjs_dark.svg", title: "Express.js" },
  // Database
  { icon: "/icons/mongodb-wordmark-dark.svg", title: "MongoDB" },
  { icon: "/icons/postgresql.svg", title: "PostgreSQL" },
  { icon: "/icons/mysql-wordmark-dark.svg", title: "MySQL" },
  { icon: "/icons/prisma_dark.svg", title: "Prisma" },
  { icon: "/icons/redis.svg", title: "Redis" },
  // DevOps & Tools
  { icon: "/icons/git.svg", title: "Git" },
  { icon: "/icons/github_dark.svg", title: "GitHub" },
  { icon: "/icons/linux.svg", title: "Linux" },
  { icon: "/icons/docker.svg", title: "Docker" },
  // { icon: "/icons/aws_dark.svg", title: "AWS" },
  // API & Deploy
  // { icon: "/icons/graphql.svg", title: "GraphQL" },
  { icon: "/icons/vercel_dark.svg", title: "Vercel" },
];
