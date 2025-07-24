"use client";

import Image from "next/image";
import LoadingBar from "@/components/LoadingBar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(() => {
            sessionStorage.setItem("cameFromHome", "true");
            router.replace("/desktop");
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [router]);

  return (
    <div
      className={`w-screen h-screen overflow-hidden flex justify-center items-center flex-col p-4 transition-opacity duration-500 ease-in-out ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center justify-center h-3/4 w-full">
        <Image
          src={"/images/os-logo.png"}
          alt="Nebula OS"
          height={1338}
          width={1536}
          className="h-96 w-auto"
          objectFit="contain"
        />
      </div>
      <div className="flex items-center justify-center h-1/4 w-full">
        <LoadingBar progress={progress} />
      </div>
    </div>
  );
}
