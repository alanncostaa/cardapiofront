import { Input } from "../ui/input";

interface SelectPratosProps {
  onBuscaChange: (busca: string) => void;
}

export function Header({ onBuscaChange }: SelectPratosProps) {
  return (
    <header className="bg-green-800 w-full h-[340px] rounded-b-xl">
      <div className="max-w-[1120px] grid grid-cols-1 mx-auto flex justify-start pt-24 px-12 sm:px-0">

        <div className="flex items-center">
          <img 
            src="/IconeMini.png" 
            alt="Logotipo do restaurante" 
            className="w-auto sm:w-auto h-auto" 
          />
        </div>

        <div role="search">
          <h1 id="titulo-pratos" className="text-5xl text-white pb-8 pt-4">
            Conheça nossas opções
          </h1>

          <label htmlFor="busca-pratos" className="sr-only">
            Caixa de texto para procurar um prato específico
          </label>

          <Input
            id="busca-pratos"
            type="search"
            placeholder="Qual prato está procurando?"
            aria-label="Buscar prato por nome"
            aria-describedby="titulo-pratos"
            onChange={(e) => onBuscaChange(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
