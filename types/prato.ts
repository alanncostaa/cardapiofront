import { z } from "zod";

export const CategoriaSchema = z.object({
  id: z.number(),
  nome: z.string(),
});

export const PratoSchema = z.object({
  id: z.number(),
  nome: z.string(),
  valor: z.number(),
  imagem: z.string(),
  descricao: z.string(),
  vegetariano: z.boolean(),
  contemGluten: z.boolean(),
  contemLactose: z.boolean(),
  categoria: CategoriaSchema,
});

export type Categoria = z.infer<typeof CategoriaSchema>;
export type Prato = z.infer<typeof PratoSchema>;
