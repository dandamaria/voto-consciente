import { useState } from "react"

const categorias = [
  "Direitos Civis",
  "Economia",
  "Educação",
  "Impostos",
  "Meio Ambiente",
  "Privatização",
  "Programas Sociais",
  "Religião no Estado",
  "Saúde",
  "Segurança",
]

function QMR() {
  const [aberto, setAberto] = useState(false)
  const [selecionado, setSelecionado] = useState(null)

  function selecionar(categoria) {
    setSelecionado(categoria)
    setAberto(false)
  }

  return (
    <section className="px-4 md:px-8 py-18 flex justify-center">

      {/* Retângulo com imagem de fundo */}
      <div
        className="rounded-3xl relative border-1"
        style={{
          backgroundImage: "url('/src/assets/fundo_section_QMR.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "1100px",
          minHeight: "240px",
        }}
      >

        {/* Card branco centralizado */}
        <div className="flex items-center justify-center px-2 py-2">
          <div
            className="rounded-3xl p-6 w-full max-w-4.5xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.97)" }}
          >

            <div className="flex flex-col items-center text-center gap-4 px-4 md:px-30">

              <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-snug">
                Quem me representa - Comece agora
              </h2>

              <p className="text-gray-900 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* Botão + Dropdown */}
              <div className="relative w-full md:w-72">

                {/* Botão */}
                <button
                  onClick={() => setAberto(!aberto)}
                  className="flex items-center justify-between w-full px-5 py-4 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50"
                >
                  <span>{selecionado ?? "Selecionar Categoria"}</span>
                  <span className="text-gray-400">{aberto ? "▲" : "▼"}</span>
                </button>

                {/* Lista de opções */}
                {aberto && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-10">
                    {categorias.map((categoria) => {
                      const estaSelecionada = selecionado === categoria
                      return (
                        <button
                          key={categoria}
                          onClick={() => selecionar(categoria)}
                          className={`
                            w-full text-left px-5 py-3 text-sm font-medium text-gray-700
                            hover:bg-black/20
                            ${estaSelecionada ? "border-l-4 border-green-500" : "border-l-4 border-transparent"}
                          `}
                        >
                          {categoria}
                        </button>
                      )
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QMR