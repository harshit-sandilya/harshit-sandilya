"use client";

import { useEffect, useRef } from "react";
import AppBar from "@/components/AppBar";
import { useNoteStore } from "@/lib/store";

export default function Note() {
  const { noteContent, setNoteContent, saveNote } = useNoteStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleSave = (event: KeyboardEvent) => {
      if (event.key === "s" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        saveNote();
      }
    };

    document.addEventListener("keydown", handleSave);

    return () => {
      document.removeEventListener("keydown", handleSave);
    };
  }, [saveNote]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteContent(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-clip">
      <AppBar name="Note" />
      <div className="flex flex-row h-screen w-screen">
        <textarea
          ref={textareaRef}
          className="flex-1 p-2 resize-none border-0 outline-none text-base bg-white text-black overflow-y-auto"
          style={{ minHeight: 0 }}
          value={noteContent}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
}
