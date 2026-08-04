export interface IContactLink {
  label: string;
  url: string;
  icon: string;
}

export interface IProfile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  summary: string;
  avatarUrl?: string;
  contacts: IContactLink[];
  highlights: {
    yearsOfExperience: string;
    keyAchievements: string[];
  };
  featuredSkills: string[];
}

export interface IExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  type: string; // Contract, Full-time, Hybrid, Remote, On-site
  skills: string[];
  highlights: string[];
  description?: string;
}

export interface IProjectSummary {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/LLM' | 'SaaS' | 'Full Stack' | 'DevOps & Cloud' | 'PoC & Open Source' | 'Architecture & Performance';
  tier: 1 | 2 | 3;
  summary: string;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  detailKey: string;
}

export interface IOwaspMitigation {
  code: string;
  title: string;
  description: string;
}

export interface IProjectDetail extends IProjectSummary {
  overview: string;
  roleDescription: string;
  responsibilities: string[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  futureEvolution?: string[];
  architectureDiagramMermaid?: string;
  metrics?: string[];
  owaspMitigations?: IOwaspMitigation[];
}

export interface IOwaspCategory {
  code: string;
  title: string;
  projects: {
    name: string;
    detailKey?: string;
    mitigation: string;
  }[];
}

export interface IEducation {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  coursework?: string[];
  tccDetails?: {
    title: string;
    summary: string;
    competencies: string[];
  };
}

export interface ICertification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  credentialUrl?: string;
  category: 'AI & Machine Learning' | 'Software Development & Architecture' | 'Cloud Computing & AWS' | 'DevOps & Infrastructure' | 'Agile & Leadership' | 'Frontend & Mobile' | 'Database & Data';
  skills?: string[];
}

export interface ISkillCategory {
  category: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}
