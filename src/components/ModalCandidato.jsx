function ModalCandidato({ candidato, propostas, resultado, onFechar }) {
  console.log("candidato:", candidato)
  console.log("propostas:", propostas)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-2xl w-[800px]">

        <button onClick={onFechar}>Fechar</button>

        <h2>{candidato.nome}</h2>

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
  )
}

export default ModalCandidato