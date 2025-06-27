"use client";

import { Project, ProjectResponse } from "@/types/ProjectPayload";
import ProjectCard from "@/components/file-explorer/projects/ProjectCard";
import { Riple } from "react-loading-indicators";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projectData, setProjectData] = useState<Project[] | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ProjectResponse = await response.json();
        setProjectData(data.projects);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };

    fetchProjectData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-start min-h-full w-full p-4 pb-6 overflow-x-clip overflow-y-auto">
      {projectData ? (
        projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Riple color="#0075ff" size="medium" />
        </div>
      )}
    </div>
  );
}
