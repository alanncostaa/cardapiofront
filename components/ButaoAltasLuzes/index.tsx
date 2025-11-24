"use client";
import { useEffect, useState } from "react";
import { Contrast } from "lucide-react";

export default function HighContrastButton() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", active);
  }, [active]);

  return (
    <button
      onClick={() => setActive(!active)}
      className="p-2 rounded-full w-10 h-10 flex items-center justify-center border border-white transition"
      style={{
        backgroundColor: active ? "#fff" : "#000",
        color: active ? "#000" : "#fff",
      }}
    >
      <Contrast
        size={22}
        style={{
          transform: active ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.3s",
        }}
      />
    </button>
  );
}
