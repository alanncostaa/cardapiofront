import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Define o tipo das categorias
interface Categoria {
  id: number | string
  nome: string
}

interface SelectPratosProps {
  categorias: Categoria[],
  onCategoriaChange: (categoria: string) => void;
}

export function SelectPratos({ categorias, onCategoriaChange }: SelectPratosProps) {
  return (
    <div className="mx-8">
      <Select onValueChange={(value) => onCategoriaChange(value)}>
        <SelectTrigger className="max-w-[1120px] mt-4 grid grid-cols-1 mx-auto flex justify-start pt-4 pb-4 px-4 sm:px-4">
          <SelectValue placeholder="Selecione a categoria do prato" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categorias</SelectLabel>
            {categorias?.map((c) => (
              <SelectItem key={c.id} value={c.nome}>
                {c.nome}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
