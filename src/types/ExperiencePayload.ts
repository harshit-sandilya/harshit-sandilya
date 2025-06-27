import { ImagePayload } from "./ImagePayload";

export interface ExperiencePayload {
  experience: Experience[];
}

export interface Experience {
  company: string;
  logo: ImagePayload;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string;
  technologies: string[];
}
