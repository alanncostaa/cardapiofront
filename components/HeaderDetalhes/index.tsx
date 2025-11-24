"use client"
import { usePratoStore } from "@/stored/pratoStore";

export function HeaderDetalhes() {
  const { pratoSelecionado } = usePratoStore();

  return (
    
    <header className="bg-green-800 w-full h-[340px] rounded-b-xl">
      <div className="max-w-[1120px] grid grid-cols-1 mx-auto flex justify-start pt-24 px-12 sm:px-0">
        <div className="flex items-center ">
          <img 
            src="/IconeMini.png" 
            alt="Logo Image" 
            className="w-auto sm:w-auto h-auto" 
          />
        </div>
        
        <div>
          <h1 className="text-5xl text-white pt-4">{pratoSelecionado?.nome}</h1>
          <p className="text-xl text-white pt-4">R$ {pratoSelecionado?.valor}</p>
        </div>
      </div>
    </header>
  );
}
