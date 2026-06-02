import { useState } from "react"
import { candidatos } from "../candidatos"
import { analisarCandidato } from "../services/analisarCandidato"
import ModalCandidato from "./ModalCandidato"

const coresPosicao = {
  "a favor": "bg-green-100 text-green-700 border border-green-300",
  "contra": "bg-red-100 text-red-700 border border-red-300",
  "misto": "bg-yellow-100 text-yellow-700 border border-yellow-300",
  "neutro": "bg-gray-100 text-gray-500 border border-gray-300",
}

const coresBotaoExpandir = {
  "a favor": "bg-green-500 hover:bg-green-600",
  "contra": "bg-red-500 hover:bg-red-600",
  "misto": "bg-yellow-500 hover:bg-yellow-600",
  "neutro": "bg-gray-500 hover:bg-gray-600",
}

function CardsCandidatos({ categoria, analisado, consulta}) {
  const [candidatoAberto, setCandidatoAberto] = useState(null) //estado dos cards expandidos - inicialmente nenhum card expandido - valor null

  return (
    <section className="px-4 md:px-8 py-10 max-w-7xl mx-auto">

      <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
        Propostas em <span className="text-green-600">{categoria}</span> {/*Texto: Propostas em {Nome da categoria} */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* exibe 1 coluna em dispositivos móveis, Alterna para 2 colunas em telas pequenas e assim por diante*/}
        {candidatos.map((candidato) => { //o código a seguir vai ser executado para CADA 'candidato' - função map()

          //todas as propostas na categoria, então é uma variável que armazena uma "lista" de propostas
          // O '??' garante que se não houver nenhuma proposta desse candidato nesta categoria então 'todasPropostas' recebe um array vazio '[]'
          const todasPropostas = candidato.propostas[categoria] ?? [] 

          const resultado = analisado? analisarCandidato(candidato,categoria,consulta) : null //retorna uma posicao(a favor, misto, contra, neutro) mas só se 'analisado' = true
          
          const propostas = analisado ? resultado.propostasOrdenadas : todasPropostas //funcionalidade em analisarCandidato() que ordena as propostas

          return (
            <div key={candidato.id} className="bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden">
              {/* CABEÇALHO DO CARD (LÓGICA DA ETIQUETAGEM AQUI DENTRO) */}
              <div className="flex items-center gap-3 p-4">
                <img src={candidato.foto} alt={candidato.nome} className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shrink-0"/>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 text-sm leading-tight">{candidato.nome}</p>
                  <p className="text-gray-600 text-xs">{candidato.partido}</p>
                  {resultado && (
                    <span className={`inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${coresPosicao[resultado.posicao]}`}>
                      {resultado.posicao}
                    </span>
                  )}
                </div>
              </div>

              {/* PROPOSTAS RESUMIDAS */}
              <div className="flex flex-col gap-2 px-4 pb-2">
                {propostas.slice(0,2).map((proposta) => ( //esse 'slice' faz com que apareca só as duas primeiras propostas
                  <div
                    key={proposta.id}
                    className="bg-gray-50 border border-gray-200 rounded-xl p-3 h-20 overflow-hidden"
                  >
                    <p className="text-xs font-semibold">{proposta.titulo}</p>
                    <p className="text-xs text-gray-1000 line-clamp-3">{proposta.descricao}</p>
                  </div>
                ))}
                  
              </div>  

              {/* Botão expandir */}
                <button onClick={() => setCandidatoAberto({candidato,propostas,resultado})} 
                className={`
                  mt-auto w-full py-3 text-white text-sm font-semibold
                  ${analisado? (coresBotaoExpandir[resultado.posicao]):("bg-green-500 hover:bg-green-600")}
                  
                `}
                >
                  <span>
                    Clique para expandir
                  </span>
                    
                </button>

            </div>
          )
        })}
      </div>
      
      {candidatoAberto && (
        <ModalCandidato
          candidato={candidatoAberto.candidato}
          propostas={candidatoAberto.propostas}
          resultado={candidatoAberto.resultado}
          onFechar={() => setCandidatoAberto(null)}
        />
      )}

    </section>
  )
}

export default CardsCandidatos