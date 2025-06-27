"use client";

import { ExperiencePayload, Experience } from "@/types/ExperiencePayload";
import ExperienceCard from "@/components/file-explorer/experiences/ExperienceCard";
import { useState, useEffect } from "react";
import { Riple } from "react-loading-indicators";

export default function Experiences() {
  const [experienceData, setExperienceData] = useState<Experience[] | null>(
    null,
  );

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch("/api/experience");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ExperiencePayload = await response.json();
        setExperienceData(data.experience);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };

    fetchExperienceData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-full w-full p-4 pb-6 overflow-x-clip overflow-y-auto">
      {experienceData ? (
        experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Riple color="#0075ff" size="medium" />
        </div>
      )}
    </div>
  );
}
