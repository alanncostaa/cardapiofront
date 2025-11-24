export function HeaderInicial() {
  return (
    <header className="bg-green-800 w-full h-[400px] rounded-b-xl">
      <div className="max-w-[1120px] text-white grid grid-cols-1 mx-auto flex justify-start pt-24 px-12 sm:px-0">

        <div className="flex items-center">
          <img 
            src="/Icone.png" 
            alt="Ícone da aplicação" 
            className="w-auto sm:w-auto h-auto" 
          />
        </div>

        {/* Título acessível da seção */}
        <h2 className="sr-only">
          Página inicial da aplicação, mensagem de boas-vindas ao usuário
        </h2>

        <div>
          <h1 className="text-5xl pt-4">
            Seja muito bem-vindo
          </h1>

          <div>
            <div className="bg-white mt-4 mr-32 p-[0.2]"></div>

            <p className="text-xl pt-4">
              É um prazer ter você aqui!
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
