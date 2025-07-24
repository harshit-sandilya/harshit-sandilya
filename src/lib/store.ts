import { create } from "zustand";

const STORAGE_KEY = "note-storage";

interface NoteState {
  noteContent: string;
  setNoteContent: (content: string) => void;
  saveNote: () => void;
  loadNote: () => void;
}

export const useNoteStore = create<NoteState>((set, get) => ({
  noteContent: "",
  setNoteContent: (content) => {
    set({ noteContent: content });
  },
  saveNote: () => {
    const contentToSave = get().noteContent;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ noteContent: contentToSave }),
    );
    console.log("Note saved!");
  },
  loadNote: () => {
    try {
      const savedItem = localStorage.getItem(STORAGE_KEY);
      if (savedItem) {
        const savedState = JSON.parse(savedItem);
        set({ noteContent: savedState.noteContent });
      }
    } catch (error) {
      console.error("Failed to load or parse note from storage", error);
    }
  },
}));

useNoteStore.getState().loadNote();
