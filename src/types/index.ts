export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  image: string;
}

export interface DentistProfile {
  id: number;
  name: string;
  role: string;
  image: string;
  specialization: string;
  education: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  categories: string[];
}