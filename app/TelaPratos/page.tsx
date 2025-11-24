"use client";

import { useState, useMemo, useEffect } from "react";
import { PratosContainer } from "@/components/ContainerPratos";
import { Header } from "@/components/Header";
import { SelectPratos } from "@/components/SelectPratos";
import { useQuery } from "@tanstack/react-query";
import { getCategorias, getPratos } from "@/services/pratos";
import { useAriaAnnouncer } from "@/hook/useAriaAnnouncer";

export default function TelaPratos() {
  const { message, announce } = useAriaAnnouncer();

  const { data: categorias } = useQuery({
    queryKey: ["categorias"],
    queryFn: getCategorias,
  });

  const { data: pratos, isLoading } = useQuery({
    queryKey: ["pratos"],
    queryFn: () => getPratos(),
  });

  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todas");

  
  const pratosFiltrados = useMemo(() => {
    if (!pratos) return [];

    return pratos.filter((p) => {
      const correspondeCategoria =
        categoriaSelecionada === "todas" ||
        p.categoria?.nome === categoriaSelecionada;

      const correspondeBusca = p.nome
        .toLowerCase()
        .includes(busca.toLowerCase());

      return correspondeCategoria && correspondeBusca;
    });
  }, [pratos, categoriaSelecionada, busca]);

  useEffect(() => {
    console.log("DEBUG -> efeito mudou", {
      isLoading,
      pratos,
      filtrados: pratosFiltrados.length,
    });
  }, [isLoading, pratosFiltrados.length]);

  
  useEffect(() => {
    if (isLoading) return;
    if (!pratos) return;

    const id = setTimeout(() => {
      if (pratosFiltrados.length === 0) {
        announce("Nenhum prato encontrado.");
      } else {
        announce(`Lista atualizada. Foram encontrados ${pratosFiltrados.length} pratos.`);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [isLoading, pratosFiltrados.length]);

  useEffect(() => {
    if (!isLoading) {
      window.dispatchEvent(new Event("pagina-atualizada"));
    }
  }, [isLoading, pratosFiltrados.length]);

  
  return (
    <main role="main" aria-busy={isLoading}>
 
      <div
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="all"
        role="status"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        {message}
      </div>

  
      <Header onBuscaChange={setBusca} />

      <nav aria-label="Filtro de pratos">
        <SelectPratos
          onCategoriaChange={setCategoriaSelecionada}
          categorias={categorias ?? []}
        />
      </nav>


      <div className="grid grid-cols-1 md:grid-cols-1">
        {isLoading ? (
          <p className="text-center mt-10 text-gray-600" role="alert">
            Carregando...
          </p>
        ) : pratosFiltrados.length > 0 ? (
          <PratosContainer pratos={pratosFiltrados} />
        ) : (
          <p className="text-center mt-10 text-gray-600" role="alert">
            Nenhum prato encontrado.
          </p>
        )}
      </div>
    </main>
  );
}
