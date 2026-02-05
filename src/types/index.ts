// Common API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Navigation Types
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  features?: string[];
}

// Industry Types
export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  solutions: string[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  subject?: string;
}

// Career Types
export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

// About Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio?: string;
  linkedin?: string;
}

export interface CompanyStats {
  yearsOfExperience: number;
  projectsCompleted: number;
  clientsSatisfied: number;
  teamMembers: number;
}

// Blog/News Types
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author?: string;
}

// Loading State
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}
