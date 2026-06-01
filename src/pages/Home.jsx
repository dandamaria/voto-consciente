import { useState } from "react"
import QMR from "../components/QMR"
import Eleicoes from "../components/Eleicoes"
import CardsCandidatos from "../components/CardsCandidatos"

function Home() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null) //nenhuma categoria selecionada ainda
  const [pauta, setPauta] = useState("")
  const [consultaAnalisada, setconsultaAnalisada] = useState("")
  const [analisado, setAnalisado] = useState(false) //consulta feita = false
  const [analisando, setAnalisando] = useState(false)

  function handleCategoria(categoria) {
    setCategoriaSelecionada(categoria)
    setPauta("")
    setconsultaAnalisada("")
    setAnalisado(false)
  }

  async function handleAnalisar() {

  if (!pauta.trim()) return
  setAnalisando(true)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  setconsultaAnalisada(pauta)
  setAnalisando(false)
  setAnalisado(true)
  }

  return (
    <>
      <QMR
        categoriaSelecionada={categoriaSelecionada} //valor inicial: (null)
        onSelecionarCategoria={handleCategoria} //conceito lifting state up
      />

      {categoriaSelecionada? (
        <>
        <div className="max-w-2xl mx-auto px-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-base font-bold text-gray-900">
              Insira uma pauta ou proposta para análise
            </h3>

            <textarea
              value={pauta}
              onChange={(e) => setPauta(e.target.value)}
              placeholder="Sugestão de propostas/pauta que o usuário pode digitar nessa categoria.."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 resize-none h-28 focus:outline-none focus:border-green-400"
            />

            <button
              onClick={handleAnalisar}
              disabled={!pauta.trim() || analisando}
              className="self-end px-6 py-2.5 bg-green-500 text-white rounded-xl"
            >
              {analisando ? "Analisando..." : "Analisar"}
            </button>
          </div>
        </div>

        <CardsCandidatos categoria={categoriaSelecionada} analisado={analisado} consulta={consultaAnalisada}/>

        </>
        )
      : (<Eleicoes/>) 
      }
    </>
  )
}
export default Home