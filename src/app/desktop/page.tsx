"use client";

import Image from "next/image";

export default function Desktop() {
  return (
    <>
      <div className="h-screen w-screen animate-fade-in relative">
        <Image
          src={"/Wallpaper.jpg"}
          alt=""
          width={2816}
          height={1536}
          className="w-screen h-screen absolute -z-10"
        />
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
