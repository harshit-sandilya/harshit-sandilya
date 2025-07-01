"use client";

import { EducationPayload, Education } from "@/types/EducationPayload";
import EducationCard from "@/components/file-explorer/education/EducationCard";
import { useState, useEffect } from "react";
import { Riple } from "react-loading-indicators";

export default function Educations() {
  const [educationData, setEducationData] = useState<Education[] | null>(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("/api/educations");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: EducationPayload = await response.json();
        setEducationData(data.educations);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };

    fetchEducationData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-full w-full p-4 pb-6 overflow-x-clip overflow-y-auto">
      {educationData ? (
        educationData.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Riple color="#0075ff" size="medium" />
        </div>
      )}
    </div>
  );
}
