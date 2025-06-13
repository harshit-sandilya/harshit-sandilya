import { useState, useEffect } from "react";
import Image from "next/image";

export default function StatusBar() {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-5 z-50"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className={`absolute top-0 left-0 bg-black/40 w-screen h-5 transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center h-full px-4 text-white text-xs">
          <span>{time}</span>
          <div className="flex items-center space-x-2">
            <Image
              src="/battery.png"
              alt="Battery Status"
              width={512}
              height={512}
              className="h-4 w-4"
            />
            <Image
              src="/wifi.png"
              alt="Network Status"
              width={512}
              height={512}
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
