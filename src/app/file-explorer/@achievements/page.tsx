"use client";

import { AchievementsPayload, Achievement } from "@/types/AchievementsPayload";
import AchievementCard from "@/components/file-explorer/achievements/AchievementCard";
import { Riple } from "react-loading-indicators";
import { useState, useEffect } from "react";

export default function Achievements() {
  const [achievementData, setAchievementData] = useState<Achievement[] | null>(
    null,
  );

  useEffect(() => {
    const fetchAchievementData = async () => {
      try {
        const response = await fetch("/api/achievements");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: AchievementsPayload = await response.json();
        setAchievementData(data.achievements);
      } catch (error) {
        console.error("Failed to fetch achievements data:", error);
      }
    };

    fetchAchievementData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-full w-full p-4 pb-6 overflow-x-clip overflow-y-auto">
      {achievementData ? (
        achievementData.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Riple color="#0075ff" size="medium" />
        </div>
      )}
    </div>
  );
}
