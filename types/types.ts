export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
  proficiency: number; // 0-100
  icon?: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
  category: "Web" | "Mobile" | "Desktop" | "AI/ML" | "Other";
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
  logo?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface TechLogo {
  icon: string;
  title: string;
  color?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
