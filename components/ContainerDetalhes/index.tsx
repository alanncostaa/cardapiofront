"use client"
import { useRouter } from "next/navigation";
import { usePratoStore } from "@/stored/pratoStore";

export function DetalhesContainer() {
  const router = useRouter();
  const { pratoSelecionado } = usePratoStore();

  function irParaCardapio() {
    router.push("/TelaPratos");
  }

  return (
    <div className="max-w-[1120px] grid grid-cols-1 mx-auto flex justify-start pt-8 px-8 pb-8 sm:px-0">

      <div>
        <img
          src={pratoSelecionado?.imagem}
          alt={pratoSelecionado?.descricao || "Imagem do prato selecionado"}
          className="w-full max-h-[500px] object-contain rounded-t-lg"
        />
      </div>

      <div className="pb-4">
        <p>{pratoSelecionado?.descricao}</p>
      </div>

      <section aria-labelledby="info-nutricional" className="w-full grid grid-cols-3 justify-between gap-8 pb-4 mx-auto flex">
        <h2 id="info-nutricional" className="sr-only">
          Informações nutricionais e restrições do prato
        </h2>

        <div className="col-span-1 justify-center">
          <img src="/milk.png" alt="Ícone de lactose" className="w-auto sm:w-auto h-auto" />
          <p className="text-sm">Contém Lactose</p>
          <p className="text-xl font-bold">{pratoSelecionado?.contemLactose ? "Sim" : "Não"}</p>
        </div>

        <div className="col-span-1">
          <img src="/list.png" alt="Ícone de glúten" className="w-auto sm:w-auto h-auto" />
          <p className="text-sm">Contém Glúten</p>
          <p className="text-xl font-bold">{pratoSelecionado?.contemGluten ? "Sim" : "Não"}</p>
        </div>

        <div className="col-span-1">
          <img src="/salad.png" alt="Ícone vegetariano" className="w-auto sm:w-auto h-auto" />
          <p className="text-sm">Vegetariano</p>
          <p className="text-xl font-bold">{pratoSelecionado?.vegetariano ? "Sim" : "Não"}</p>
        </div>
      </section>

      <button
        onClick={irParaCardapio}
        aria-label="Voltar para a página do cardápio"
        className="bg-green-800 text-white mt-2 px-4 py-2 rounded-xl"
      >
        Voltar para o cardápio
      </button>
    </div>
  );
}
