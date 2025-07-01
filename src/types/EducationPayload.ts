export interface EducationPayload {
  educations: Education[];
}

export interface Education {
  degree: string;
  fieldOfStudy: string;
  CGPA: number;
  maxCGPA: number;
  university: string;
  graduationYear: string;
  keyCourses: string[];
}
