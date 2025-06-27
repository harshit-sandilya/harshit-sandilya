export interface ProjectResponse {
  projects: Project[];
}

export interface Project {
  name: string;
  description: string;
  startDate: string;
  endDate: string | null;
  link: string | null;
}
