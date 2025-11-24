"use client";

import { useRouter } from "next/navigation";

export function InicialContainer() {
  const router = useRouter();

  function irParaCardapio() {
    router.push("/TelaPratos");
  }

  return (
    <div className="max-w-[1120px] grid grid-cols-1 mx-auto flex justify-start pt-8 px-8 sm:px-0">
      <button
        type="button"
        onClick={irParaCardapio}
        aria-label="Ir para o cardápio de pratos"
        className="bg-green-800 text-white px-4 py-2 rounded-xl"
      >
        Ir para o cardápio
      </button>
    </div>
  );
}
