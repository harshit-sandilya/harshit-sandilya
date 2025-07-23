"use client";

import { SkillPayload, Skill } from "@/types/SkillPayload";
import SkillCard from "@/components/file-explorer/skills/SkillCard";
import { Riple } from "react-loading-indicators";
import { useState, useEffect } from "react";

export default function Skills() {
  const [skillData, setSkillData] = useState<Skill[] | null>(null);

  useEffect(() => {
    const fetchSkillData = async () => {
      try {
        const response = await fetch("/api/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: SkillPayload = await response.json();
        setSkillData(data.skills);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };

    fetchSkillData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-full w-full p-4 pb-6 overflow-x-clip overflow-y-auto">
      {skillData ? (
        skillData.map((skill, index) => <SkillCard key={index} skill={skill} />)
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Riple color="#0075ff" size="medium" />
        </div>
      )}
    </div>
  );
}
