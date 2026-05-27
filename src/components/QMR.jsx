function QMR() {
  return (
    <section className="px-4 md:px-8 py-18 flex justify-center">

      {/* Retângulo com imagem de fundo */}
      <div
        className="rounded-3xl overflow-hidden relative border-1"
        style={{
          backgroundImage: "url('/src/assets/fundo_section_QMR.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "90%",
          maxWidth: "1100px",
          minHeight: "260px",
        }}
      >

        {/* Card branco centralizado em cima do fundo */}
        <div className="flex items-center justify-center px-2 py-2">
          <div
            className="rounded-3xl p-6 w-full max-w-4.5xl"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.97)" }}
          >

            {/* Conteúdo do card */}
            <div className="flex flex-col items-center text-center gap-4 px-4 md:px-30">

              <h2 className="text-lg md:text-2xl font-bold text-gray-900 leading-snug">
                Quem me representa - Comece agora
              </h2>

              <p className="text-gray-900 text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>

              {/* Botão dropdown */}
              <button className="flex items-center justify-between w-full md:w-72 px-5 py-4 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50">
                <span>Selecionar Categoria</span>
                <span className="text-gray-400">▼</span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default QMR