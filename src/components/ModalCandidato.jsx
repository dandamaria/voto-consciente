function ModalCandidato({ candidato, propostas, resultado, onFechar }) {
  console.log("candidato:", candidato)
  console.log("propostas:", propostas)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-2xl w-[90vw] h-[80vh] flex flex-col pl-4 pr-4">

        <button onClick={onFechar} className="t-auto rounded-xl py-2 bg-yellow-400 hover:bg-yellow-600 text-white text-lm font-semibold">Clique para fechar</button>

        <h2 className="text-xl py-1 pt-3">{candidato.nome}</h2>

        <div className=" pr-3 overflow-auto modal-scrollbar flex-1">
          {/*LISTA DAS PROPOSTAS */}
          {propostas.map((proposta) => (
            <div
              key={proposta.id}
              className="border rounded-xl p-4 my-2"
            >
              <p>{proposta.titulo}</p>
              <p className="text-xs text-gray-1000">{proposta.descricao}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default ModalCandidato