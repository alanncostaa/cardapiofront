import { CardPratos } from "../CardPratos";
import { Prato } from "@/types/prato";

interface PratosProps {
  pratos: Prato[]
}


export function PratosContainer({pratos}:PratosProps) {
  return (
    <div
      className="max-w-[1120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto pt-8 px-8 sm:px-0"
    >
      {pratos.map((prato) => (
        <CardPratos key={prato.id} prato={prato} />
      ))}
    </div>
  )
}