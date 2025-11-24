// store/pratoStore.ts
import { create } from "zustand";
import { Prato } from "@/types/prato";

interface PratoState {
  pratoSelecionado?: Prato;
  setPratoSelecionado: (p: Prato) => void;
}

export const usePratoStore = create<PratoState>((set) => ({
  pratoSelecionado: undefined,
  setPratoSelecionado: (p) => set({ pratoSelecionado: p }),
}));
