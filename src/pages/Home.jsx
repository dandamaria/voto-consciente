import { useState } from "react"
import { candidatos } from "../candidatos"
import QMR from "../components/QMR"
import Eleicoes from "../components/Eleicoes"
import CardsCandidatos from "../components/CardsCandidatos"

// Simula a análise da IA: atribui uma posição aleatória a cada candidato
// e marca quais propostas são "relevantes" para aquela pauta
function simularAnaliseIA(categoria) {
  const posicoes = ["a favor", "contra", "misto", "neutro"]

  return candidatos.map((candidato) => {
    const propostas = candidato.propostas[categoria] ?? []
    const posicaoAnalisada = posicoes[Math.floor(Math.random() * posicoes.length)]

    // Marca aleatoriamente algumas propostas como relevantes
    const propostasAnalisadas = propostas.map((p) => ({
      ...p,
      relevante: Math.random() > 0.3, // 70% de chance de ser relevante
    }))

    return {
      ...candidato,
      posicaoAnalisada,
      propostas: {
        ...candidato.propostas,
        [categoria]: propostasAnalisadas,
      },
    }
  })
}

function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)
  const [pauta, setPauta] = useState("")
  const [analisado, setAnalisado] = useState(false)
  const [analisando, setAnalisando] = useState(false)
  const [candidatosAnalisados, setCandidatosAnalisados] = useState([])

  function handleCategoria(categoria) {
    setCategoriaSelecionada(categoria)
    setPauta("")
    setAnalisado(false)
    setCandidatosAnalisados([])
  }

  async function handleAnalisar() {
    if (!pauta.trim()) return
    setAnalisando(true)
    setAnalisado(false)
    setCandidatosAnalisados([])

    // Simula delay da IA
    await new Promise((r) => setTimeout(r, 1500))

    const resultado = simularAnaliseIA(categoriaSelecionada)
    setCandidatosAnalisados(resultado)
    setAnalisando(false)
    setAnalisado(true)
  }

  return (
    <>
      <QMR
        categoriaSelecionada={categoriaSelecionada}
        onSelecionarCategoria={handleCategoria}
      />

      {categoriaSelecionada ? (
        <>
          {/* Campo de pauta */}
          <div className="max-w-2xl mx-auto px-4 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-base font-bold text-gray-900">
                Insira uma pauta ou proposta para análise
              </h3>
              <textarea
                value={pauta}
                onChange={(e) => setPauta(e.target.value)}
                placeholder="Ex: Quero saber quem apoia mais investimento em educação pública..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none h-28 focus:outline-none focus:border-green-400"
              />
              <button
                onClick={handleAnalisar}
                disabled={!pauta.trim() || analisando}
                className="self-end px-6 py-2.5 bg-green-500 hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold text-sm rounded-xl transition-colors"
              >
                {analisando ? "Analisando..." : "Analisar"}
              </button>
            </div>
          </div>

          <CardsCandidatos
            categoria={categoriaSelecionada}
            analisado={analisado}
            candidatosAnalisados={candidatosAnalisados}
          />
        </>
      ) : (
        <Eleicoes />
      )}
    </>
  )
}

export default Home