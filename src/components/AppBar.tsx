"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AppBar({ name }: { name: string }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 items-center p-1 bg-white/80 backdrop-blur-sm rounded-t-lg shadow-sm">
      <div className="flex justify-start">
        <button
          onClick={() => router.back()}
          className="p-1 rounded-full transition-transform duration-200 hover:scale-125"
          aria-label="Close"
        >
          <Image
            src="/images/close.png"
            alt="Close"
            width={16}
            height={16}
            className="h-4 w-4"
          />
        </button>
      </div>
      <h1 className="text-sm font-semibold text-center text-slate-800 tracking-wide select-none">
        {name}
      </h1>
      <div className="flex justify-end">
        {/* Placeholder to balance the close button and center the title */}
        <div className="w-6 h-6" />
      </div>
    </div>
  );
}
