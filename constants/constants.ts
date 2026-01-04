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
  resumeUrl:
    "https://drive.google.com/file/d/1MaZ-9dlzhs9o1Hho00tc0Y_TQGsyM9Ya/view?usp=sharing",
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

export const experiences: Experience[] = [
  {
    company: "Duke And Clyde Innovation Center",
    role: "Software Development Intern",
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    achievements: [
      "Optimized frontend performance by implementing lightweight React.js components, achieving faster load times and a smoother user interface",
      "Monitored AWS-hosted application health and streamlined cloud infrastructure to minimize downtime during deployment cycles",
      "Integrated a secure authentication flow using OAuth 2.0, enabling third-party sign-on and ensuring secure session management",
    ],
    technologies: ["React", "TypeScript", "AWS", "OAuth 2.0", "Node.js", "Git"],
  },
];

export const projects: Project[] = [
  {
    title: "LearnHub",
    description: "Scalable LMS Platform for Video Courses",
    // longDescription:
    //   "Built a robust authentication system that reduced login/register API response times by 50% by offloading email delivery to background workers. Engineered a custom React video player integrated with HLS.js, enabling adaptive bitrate streaming (ABS) to prevent buffering and ensure a seamless viewing experience. Leveraged message queues to frequently accessed data like course retrieval times by 40% and significantly reducing database load. Implemented global state management with Zustand and enhanced data fetching using React Query to reduce UI load times by 30% and ensure responsiveness.",
    technologies: [
      "Next.js",
      "Prisma",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Redis",
      "Zustand",
      "React Query",
      "HLS.js",
    ],
    githubUrl: "https://github.com/Aftab3008/shadow-course-hub",
    liveUrl: "https://shadow-course-hub.vercel.app/",
    featured: true,
    category: "Web",
    imageUrl: "/projects/learnhub.png",
  },
  {
    title: "AI Resume Enhancer",
    description: "AI-Driven Career Analysis Tool",
    // longDescription:
    //   "Developed an AI-powered Resume Enhancer that delivers personalized career insights, leveraging market trend analysis and optimizing profiles for better job alignment. Integrated Groq Cloud's LLM API to deliver real-time career insights, optimizing prompt engineering for faster user responses and higher answer latency. Crafted a seamless resume editor praised by hackathon judges for its intuitive workflow and instant PDF export capabilities.",
    technologies: ["React", "TypeScript", "Groq AI", "Clerk", "Prisma"],
    githubUrl: "https://github.com/Aftab3008/resume-enhancer",
    liveUrl: "https://resume-enhancer-two.vercel.app",
    featured: true,
    category: "Web",
    imageUrl: "/projects/ai-resume-enhancer.png",
  },
  {
    title: "Social Network CLI Application",
    description: "A Java based Interactive Command-Line Social Platform",
    // longDescription:
    //   "Architected a Java-based command-line social network applying software engineering principles and advanced Object-Oriented Programming to deliver robust user, topic, and threaded-comment functionality. Designed a command-line interface for intuitive user interaction, post creation, topic search, and ensuring a robust user experience.",
    technologies: [
      "Java",
      "Object Oriented Programming",
      "CLI Design",
      "File I/O",
    ],
    githubUrl: "https://github.com/Aftab3008/social_network",
    liveUrl: "",
    featured: true,
    category: "Web",
    imageUrl: "/projects/cli.png",
  },
  {
    title: "CaseCobra",
    description:
      "A E-commerce based SaaS application for customized phone cases",
    // longDescription:
    //   "CaseCobra is a full-featured e-commerce SaaS that allows users to create one-of-one custom phone cases. The platform features an interactive design studio where users can upload images, position them on various iPhone models, and preview the final product in real-time. With a focus on quality and user trust. It includes a seamless checkout process and a responsive design optimized for conversion.",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Clerk",
      "Stripe",
      "Prisma",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Aftab3008/casecobra",
    liveUrl: "https://casecobra-drab-psi.vercel.app/",
    featured: true,
    category: "Web",
    imageUrl: "/projects/casecobra.png",
  },
  {
    title: "Livedocs",
    description: "A Real-time collaborative editor",
    // longDescription:
    //   "LiveDocs is a collaborative workspace designed to rival tools like Google Docs. It enables multiple users to edit documents simultaneously with real-time presence (live cursors) and instant synchronization. The platform features a comprehensive rich-text editor, a threaded comment system for team communication, and a document management dashboard. Security is managed through a robust permission system, allowing document owners to grant specific 'Viewer' or 'Editor' access levels to other users via email.",
    technologies: [
      "Next.js",
      "React.js",
      "Liveblocks",
      "Clerk",
      "TypeScript",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Aftab3008/livedocs",
    liveUrl: "https://livedocs-lilac.vercel.app/",
    featured: true,
    category: "Web",
    imageUrl: "/projects/livedocs.png",
  },
];

export const education: Education[] = [
  {
    institution:
      "Indian Institute of Information Technology Design and Manufacturing, Kurnool",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2022",
    endDate: "2026",
    gpa: "8.39/10",
    achievements: [
      {
        title: "GDG Hackathon Winner",
        description:
          "Winner (1st Place) of the GDG Hackathon, leading a cross-functional team to design and develop an AI Resume Enhancer, selected over 18+ competing teams due to technical execution and real-world impact.",
        imageUrl: "/logos/gdg_logo.webp",
      },
      {
        title: "LeetCode Knight Badge",
        description:
          "Achieved LeetCode Knight Badge and solved 800+ algorithmic challenges across LeetCode and CodeForces, demonstrating advanced mastery of DSA, including Sorting, Algorithms, Trees, Graphs, and Dynamic Programming.",
        imageUrl: "/logos/leetcode_logo.jpeg",
        otherLinks: "https://leetcode.com/u/shaikaftab005/",
      },
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
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com/shaikaftab769879",
  //   icon: "Twitter",
  //   handle: "@shaikaftab769879",
  // },
  {
    name: "Email",
    url: "mailto:shaikaftab005@gmail.com",
    icon: "Mail",
    handle: "shaikaftab005@gmail.com",
  },
];

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

export const quickLinks = [
  "Hero",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];
