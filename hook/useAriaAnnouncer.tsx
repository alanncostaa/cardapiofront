import { useState } from "react";

export function useAriaAnnouncer() {
  const [message, setMessage] = useState("");

  const announce = (text: string) => {
    if (text === message) return;

    // limpa
    setMessage("");

    // delay essencial para NVDA / VoiceOver
    setTimeout(() => {
      setMessage(text);
    }, 120); // 100 a 150 ms é o ideal
  };

  return { message, announce };
}
