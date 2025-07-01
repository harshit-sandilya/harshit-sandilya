import { ImagePayload } from "./ImagePayload";

export interface ExperiencePayload {
  experiences: Experience[];
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
