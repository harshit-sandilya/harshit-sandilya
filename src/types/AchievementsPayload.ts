export interface AchievementsPayload {
  achievements: Achievement[];
}

export interface Achievement {
  type: string;
  title: string;
  description: string;
  reference: AchievementReference;
  github: string;
}

export interface AchievementReference {
  label: string;
  data: string;
  isLink: boolean;
}
