"use client";

import { useState, useEffect, useRef } from "react";
import AppBar from "@/components/AppBar";

interface HistoryItem {
  type: "command" | "output";
  content: string;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      content:
        "Welcome to Nebula OS Terminal. Type 'help' for a list of commands.",
    },
  ]);
  const [command, setCommand] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const processCommand = (cmd: string) => {
    const newHistory: HistoryItem[] = [
      ...history,
      { type: "command", content: cmd },
    ];
    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = "Available commands: help, clear, date, whoami";
        break;
      case "clear":
        setHistory([]);
        return;
      case "date":
        output = new Date().toString();
        break;
      case "whoami":
        output = "guest";
        break;
      default:
        output = `command not found: ${cmd}`;
    }

    setHistory([...newHistory, { type: "output", content: output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand(command);
      setCommand("");
    }
  };

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col h-screen w-screen bg-black/90 text-white text-sm font-mono">
      <AppBar name="Terminal" />
      <div
        ref={historyRef}
        className="flex-grow p-4 overflow-y-auto font-mono"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index}>
            {item.type === "command" ? (
              <div className="flex items-center">
                <span className="text-green-400">&gt;</span>
                <span className="ml-2">{item.content}</span>
              </div>
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-green-400">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none text-white focus:outline-none w-full ml-2"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
