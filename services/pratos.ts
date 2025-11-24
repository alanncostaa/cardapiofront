import { api } from "@/lib/api";
import { Prato, Categoria } from "@/types/prato";

export async function getPratos(
  search?: string,
  categoriaId?: number
): Promise<Prato[]> {
  // ✅ Define tipo explícito para os parâmetros
  const params: Record<string, string | number | undefined> = {};
  if (search) params.search = search;
  if (categoriaId) params.categoriaId = categoriaId;

  const response = await api.get<Prato[]>("/pratos", { params });
  return response.data;
}

export async function getCategorias(): Promise<Categoria[]> {
  const response = await api.get<Categoria[]>("/categorias");
  return response.data;
}
