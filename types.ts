export interface Pillar {
  title: string;
  description: string;
  id: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface Stat {
  label: string;
  value: string;
  subtitle?: string;
}