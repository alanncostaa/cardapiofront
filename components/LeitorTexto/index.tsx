"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, Pause, Play } from "lucide-react";
import { usePathname } from "next/navigation"; // Detecta mudança de página no Next.js

export default function LeitorNativo() {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const pathname = usePathname(); // Atualiza ao trocar de rota

  // Recria texto quando mudar de rota OU quando receber evento de atualização
useEffect(() => {
  function atualizarLeitura() {
    speechSynthesis.cancel();

    const text = document.body.innerText.trim();
    if (!text) return;

    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 1;
    u.pitch = 1;

    u.onend = () => {
      setIsReading(false);
      setIsPaused(false);
    };

    utteranceRef.current = u;
  }

  atualizarLeitura(); // roda ao acessar a rota

  // Ouve evento vindo da tela
  window.addEventListener("pagina-atualizada", atualizarLeitura);

  return () => {
    window.removeEventListener("pagina-atualizada", atualizarLeitura);
  };
}, [pathname]);


  const iniciarLeitura = () => {
    if (!utteranceRef.current) return;
    speechSynthesis.cancel();
    speechSynthesis.speak(utteranceRef.current);
    setIsReading(true);
    setIsPaused(false);
  };

  const pausarLeitura = () => {
    speechSynthesis.pause();
    setIsPaused(true);
  };

  const retomarLeitura = () => {
    speechSynthesis.resume();
    setIsPaused(false);
  };

  return (
    <div className="flex items-center gap-2">
  {!isReading ? (
    <button
      onClick={iniciarLeitura}
      className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      title="Ler página"
    >
      <Volume2 size={22} />
    </button>
  ) : isPaused ? (
    <button
      onClick={retomarLeitura}
      className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      title="Retomar leitura"
    >
      <Play size={22} />
    </button>
  ) : (
    <button
      onClick={pausarLeitura}
      className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition"
      title="Pausar leitura"
    >
      <Pause size={22} />
    </button>
  )}
</div>

  );
}
