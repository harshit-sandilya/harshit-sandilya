"use client";

import { AboutResponse } from "@/types/AboutPayload";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [aboutData, setAboutData] = useState<AboutResponse | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("/api/about");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: AboutResponse = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center h-full w-full">
      <div className="h-full w-3/4 p-4 text-justify">{aboutData?.text}</div>
      <div className="h-full w-1/4 flex flex-col justify-start items-center p-2">
        <div className="w-full aspect-square rounded-full bg-gray-100 backdrop-blur-3xl p-2 shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.7),inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] border border-gray-200">
          {aboutData && aboutData.image && aboutData.image.src && (
            <Image
              src={aboutData.image.src}
              alt={aboutData.image.alt}
              width={aboutData.image.width}
              height={aboutData.image.height}
              className="object-cover rounded-full h-full w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
}
