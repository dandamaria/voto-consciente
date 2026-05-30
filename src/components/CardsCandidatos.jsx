import { useState } from "react"
import { candidatos } from "../candidatos"

const coresPosicao = {
  "a favor": "bg-green-100 text-green-700 border border-green-300",
  "contra": "bg-red-100 text-red-700 border border-red-300",
  "misto": "bg-yellow-100 text-yellow-700 border border-yellow-300",
  "neutro": "bg-gray-100 text-gray-500 border border-gray-300",
}

function CardsCandidatos({ categoria, pauta, analisado }) {
  const [expandido, setExpandido] = useState(null)

  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">

      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Propostas sobre <span className="text-green-600">{categoria}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {candidatos.map((candidato) => {
          const todasPropostas = candidato.propostas[categoria] ?? []

          // Se já analisou, filtra só as propostas relevantes (simula IA)
          const propostas = analisado
            ? todasPropostas.filter((p) => p.relevante)
            : todasPropostas

          // Se analisou e não tem nenhuma proposta relevante, esconde o card
          if (analisado && propostas.length === 0) return null

          const estaExpandido = expandido === candidato.id

          return (
            <div
              key={candidato.id}
              className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden"
            >
              {/* Cabeçalho do card */}
              <div className="flex items-center gap-3 p-4">
                <img
                  src={candidato.foto}
                  alt={candidato.nome}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm leading-tight">{candidato.nome}</p>
                  <p className="text-gray-400 text-xs">{candidato.partido}</p>
                  {/* Etiqueta — só aparece após análise */}
                  {analisado && candidato.posicaoAnalisada && (
                    <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${coresPosicao[candidato.posicaoAnalisada]}`}>
                      {candidato.posicaoAnalisada}
                    </span>
                  )}
                </div>
              </div>

              {/* Lista de propostas */}
              <div className="flex flex-col gap-2 px-4 pb-2">
                {propostas.map((proposta, index) => {
                  const propostaExpandida = estaExpandido && expandido === candidato.id

                  return (
                    <div key={proposta.id} className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-gray-800">{proposta.titulo}</p>
                      {/* Mostra descrição só do primeiro, ou de todos se expandido */}
                      {(index === 0 || estaExpandido) && (
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-3">
                          {proposta.descricao}
                        </p>
                      )}
                      {index === 0 && !estaExpandido && (
                        <button
                          onClick={() => {}}
                          className="text-xs text-green-600 font-medium mt-1"
                        >
                          Clique para ler mais
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Botão expandir */}
              {propostas.length > 1 && (
                <button
                  onClick={() => setExpandido(estaExpandido ? null : candidato.id)}
                  className="mt-auto w-full py-3 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold"
                >
                  {estaExpandido ? "Clique para recolher" : "Clique para expandir"}
                </button>
              )}

            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CardsCandidatos