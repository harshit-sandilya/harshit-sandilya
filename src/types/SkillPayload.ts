export interface SkillPayload {
  skills: Skill[];
}

export interface Skill {
  domain: string;
  items: string[];
}
