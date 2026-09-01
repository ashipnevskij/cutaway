export interface SeedSkill {
  name: string;
  category?: string | null;
}

export interface SeedExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  description?: string | null;
  technologies?: string[];
}

export interface SeedProject {
  name: string;
  description?: string | null;
  stack?: string[];
  link?: string | null;
  repoUrl?: string | null;
  demoUrl?: string | null;
}

export interface SeedData {
  name: string;
  title?: string | null;
  position: string;
  description?: string | null;
  githubUrl?: string | null;
  linkedinUrl?: string | null;
  email?: string | null;
  skills: SeedSkill[];
  experience: SeedExperience[];
  projects: SeedProject[];
}

export const data: SeedData;
