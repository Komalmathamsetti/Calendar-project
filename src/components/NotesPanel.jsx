"use client";

import { useState, useEffect } from "react";

export default function NotesPanel({ keyName }) {
  const [note, setNote] = useState("");

  // ✅ Load note when month changes
  useEffect(() => {
    const saved = localStorage.getItem(keyName);
    if (saved) {
      setNote(saved);
    } else {
      setNote(""); // clear if no note
    }
  }, [keyName]);

  // ✅ Save note
  const saveNote = () => {
    localStorage.setItem(keyName, note);
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="font-semibold mb-2 text-gray-800 text-lg">Notes</h2>

      <textarea
        className="w-full h-32 border border-gray-300 p-3 rounded-lg"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />

      <button
        onClick={saveNote}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Save
      </button>
    </div>
  );
}
/*"use client";

import { useState } from "react";

export default function NotesPanel({ keyName }) {
  const [note, setNote] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(keyName) || "";
    }
    return "";
  });

  const saveNote = () => {
    localStorage.setItem(keyName, note);
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="font-semibold mb-2 text-gray-800 text-lg">Notes</h2>

      <textarea
        className="w-full h-32 border border-gray-300 p-3 rounded-lg 
        text-gray-800 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />

      <button
        onClick={saveNote}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg 
        hover:bg-blue-600 transition-all shadow-md"
      >
        Save
      </button>
    </div>
  );
}*/