"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { Prato } from "@/types/prato";
import { usePratoStore } from "@/stored/pratoStore";

interface PratosProps {
  prato: Prato
}

export function CardPratos({ prato }: PratosProps) {
  const router = useRouter();
  const { setPratoSelecionado } = usePratoStore();

  function irParaDetalhes() {
    setPratoSelecionado(prato);
    router.push("/TelaDetalhes");
  }

  return (
    <article
      aria-label={`Prato: ${prato.nome}`}
      className="w-full pb-4 mb-4"
    >
      <Card>
        <CardContent className="p-4">
          <img
            src={prato.imagem}
            alt={`Imagem do prato ${prato.nome}`}
            className="w-[1120px] h-48 object-cover rounded-t-lg"
          />
        </CardContent>

        <CardHeader>
          <CardTitle>{prato.nome}</CardTitle>

          <CardDescription
            aria-label={`Preço: ${prato.valor} reais`}
          >
            R$ {prato.valor}
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <Button
            onClick={irParaDetalhes}
            type="submit"
            className="bg-green-800 w-full"
            aria-label={`Ver detalhes do prato ${prato.nome}`}
          >
            Ver Detalhes
          </Button>
        </CardFooter>

      </Card>
    </article>
  );
}
