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
"use client";

import { useState, useCallback } from "react";

function getNote(keyName) {
  return localStorage.getItem(keyName) || "";
}

export default function NotesPanel({ month }) {
  const keyName = `note_${month}`;

  const [note, setNote] = useState(() => getNote(keyName));
  const [savedMonth, setSavedMonth] = useState(month);
  const [saved, setSaved] = useState(false);

  // Derive note from storage when month changes — no useEffect needed
  const displayNote = month === savedMonth ? note : getNote(keyName);

  const handleChange = (e) => {
    setSavedMonth(month);
    setNote(e.target.value);
    setSaved(false);
  };

  const saveNote = useCallback(() => {
    localStorage.setItem(keyName, displayNote);
    setNote(displayNote);
    setSavedMonth(month);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [keyName, displayNote, month]);

  return (
    <div className="p-5 bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-gray-800 text-lg">
          Notes — {month}
        </h2>
        {saved && (
          <span className="text-green-500 text-sm font-medium transition-opacity duration-300">
            ✓ Saved
          </span>
        )}
      </div>

      <textarea
        className="w-full h-32 border border-gray-300 p-3 rounded-lg
          text-gray-800 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={displayNote}
        onChange={handleChange}
        placeholder={`Write your notes for ${month} here...`}
      />

      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-gray-400">
          {displayNote.length} character{displayNote.length !== 1 ? "s" : ""}
        </span>
        <button
          onClick={saveNote}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg
            hover:bg-blue-600 transition-all shadow-md"
        >
          Save
        </button>
      </div>
    </div>
  );
}