"use client";

import { useState, useCallback } from "react";

function getNote(keyName) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(keyName) || "";
  }
  return "";
}

const placeholderStyle = `
  .notes-textarea::placeholder {
    color: #94a3b8;
    opacity: 1;
  }
`;

export default function NotesPanel({ month }) {
  const keyName = `note_${month}`;

  const [note, setNote] = useState(() => getNote(keyName));
  const [savedMonth, setSavedMonth] = useState(month);
  const [saved, setSaved] = useState(false);

  const displayNote = month === savedMonth ? note : getNote(keyName);

  const handleChange = (e) => {
    setSavedMonth(month);
    setNote(e.target.value);
    setSaved(false);
  };

  const saveNote = useCallback(() => {
  if (typeof window !== "undefined") {
  localStorage.setItem(keyName, displayNote);
  }
    setNote(displayNote);
    setSavedMonth(month);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [keyName, displayNote, month]);

  return (
    <>
      <style>{placeholderStyle}</style>

      <div style={{
        padding: "24px",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "'Segoe UI', sans-serif",
      }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "10px", height: "10px", borderRadius: "50%",
              background: "#00f5ff", boxShadow: "0 0 8px #00f5ff"
            }} />
            <h2 style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "700",
              color: "#00f5ff",
              textShadow: "0 0 12px rgba(0,245,255,0.5)",
              letterSpacing: "0.5px",
            }}>
              Notes — {month}
            </h2>
          </div>

          {saved && (
            <span style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#39ff14",
              textShadow: "0 0 8px rgba(57,255,20,0.6)",
              padding: "4px 10px",
              background: "rgba(57,255,20,0.1)",
              borderRadius: "20px",
              border: "1px solid rgba(57,255,20,0.3)",
            }}>
              ✓ Saved
            </span>
          )}
        </div>

        {/* Textarea */}
        <textarea
          className="notes-textarea"
          value={displayNote}
          onChange={handleChange}
          placeholder={`Write your notes for ${month} here...`}
          style={{
            width: "100%",
            height: "140px",
            background: "rgba(255,255,255,0.05)",
            border: "1.5px solid rgba(0,245,255,0.3)",
            borderRadius: "12px",
            padding: "14px 16px",
            fontSize: "15px",
            fontWeight: "500",
            color: "#000000",
            lineHeight: "1.7",
            resize: "vertical",
            outline: "none",
            boxSizing: "border-box",
            fontFamily: "'Segoe UI', sans-serif",
            caretColor: "#00f5ff",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={e => {
            e.target.style.borderColor = "#00f5ff";
            e.target.style.boxShadow = "0 0 0 3px rgba(0,245,255,0.15)";
          }}
          onBlur={e => {
            e.target.style.borderColor = "rgba(0,245,255,0.3)";
            e.target.style.boxShadow = "none";
          }}
        />

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "12px" }}>
          <span style={{
            fontSize: "12px",
            color: "#a78bfa",
            fontWeight: "500",
            letterSpacing: "0.3px",
          }}>
            {displayNote.length} character{displayNote.length !== 1 ? "s" : ""}
          </span>

          <button
            onClick={saveNote}
            style={{
              background: "linear-gradient(135deg, #00f5ff, #a855f7)",
              border: "none",
              borderRadius: "10px",
              padding: "9px 22px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#0f0f1a",
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 15px rgba(0,245,255,0.3)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={e => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0,245,255,0.5)";
            }}
            onMouseLeave={e => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0,245,255,0.3)";
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}