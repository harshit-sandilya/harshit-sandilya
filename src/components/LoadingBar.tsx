import React from "react";

interface LoadingBarProps {
  progress: number;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-linear"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
