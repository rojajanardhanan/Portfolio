export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  grade: string;
  period: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  highlight?: string;
}
