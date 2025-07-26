"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import Switch from "@/components/Switch";

export default function Settings() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen overflow-clip">
      <AppBar name="Settings" />
      <div className="flex flex-col h-screen w-screen p-4 items-center justify-center">
        <div className="flex flex-col items-center justify-between gap-2 p-4">
          <div className="font-medium text-xl">Dark Theme</div>
          <Switch
            checked={darkTheme}
            onChange={(checked) => {
              setDarkTheme(checked);
              if (checked) {
                document.documentElement.classList.add("dark");
              } else {
                document.documentElement.classList.remove("dark");
              }
            }}
          />
          <div>Coming soon...</div>
        </div>
      </div>
    </div>
  );
}
