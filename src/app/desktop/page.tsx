"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TaskBar from "@/components/TaskBar";
import StatusBar from "@/components/StatusBar";

export default function Desktop() {
  const [applyFadeIn, setApplyFadeIn] = useState(false);

  useEffect(() => {
    const cameFromHome = sessionStorage.getItem("cameFromHome");
    if (cameFromHome === "true") {
      setApplyFadeIn(true);
      sessionStorage.removeItem("cameFromHome");
    } else {
      setApplyFadeIn(false);
    }
  }, []);

  return (
    <>
      <div
        className={`h-screen w-screen relative ${
          applyFadeIn ? "animate-fade-in" : "opacity-100"
        }`}
      >
        <Image
          src={"/images/Wallpaper.jpg"}
          alt=""
          width={7680}
          height={4320}
          className="w-screen h-screen absolute -z-10"
        />
        <TaskBar />
        <StatusBar />
        <div className="relative z-10 h-screen w-screen"></div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }
      `}</style>
    </>
  );
}
