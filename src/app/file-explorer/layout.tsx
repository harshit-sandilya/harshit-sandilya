"use client";

import AppBar from "@/components/AppBar";
import Sidebar from "@/components/file-explorer/Sidebar";
import { ReactNode, useState } from "react";

export default function FileExplorer({
  children,
  about,
  projects,
  experiences,
  education,
  skills,
  achievements,
}: {
  children: ReactNode;
  about: ReactNode;
  projects: ReactNode;
  experiences: ReactNode;
  education: ReactNode;
  skills: ReactNode;
  achievements: ReactNode;
}) {
  const [selected, setSelected] = useState<string>("About");
  const items = [
    "About",
    "Projects",
    "Experience",
    "Education",
    "Skills",
    "Achievements",
    "Resume",
  ];

  return (
    <div className="flex flex-col h-screen w-screen overflow-clip">
      {children}
      <AppBar name="File Explorer" />
      <div className="flex flex-row h-screen w-screen">
        <Sidebar items={items} selected={selected} setSelected={setSelected} />
        <div className="flex flex-col h-full w-3/4 justify-start items-center">
          {selected === "About" ? (
            about
          ) : selected === "Projects" ? (
            projects
          ) : selected === "Experience" ? (
            experiences
          ) : selected === "Education" ? (
            education
          ) : selected === "Skills" ? (
            skills
          ) : selected === "Achievements" ? (
            achievements
          ) : selected === "Resume" ? (
            <div className="text-center text-gray-500">
              Resume content will be displayed here.
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Please select an item from the sidebar.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
