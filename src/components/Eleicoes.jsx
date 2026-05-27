function Eleicoes() {
  return (
    <section className="py-10 w-full max-w-290 mx-auto p-10">

      {/* Título centralizado */}
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Eleições 2026
      </h2>

      {/* Corpo com float */}
      <div className="text-gray-600 text-base leading-relaxed text-justify">

        {/* Foto flutua à direita no desktop, vai pro final no mobile */}
        <img
          src="src\assets\imagem1_section_eleicoes.jpg"
          alt="Eleições 2026"
          className="rounded-2xl ml-8 mb-4 w-72 float-right hidden md:block"
        />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Foto aparece aqui no mobile (abaixo do texto) */}
        <img
          src="src\assets\imagem1_section_eleicoes.jpg"
          alt="Eleições 26"
          className="rounded-2xl mt-6 w-full md:hidden"
        />

         <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        

      </div>
    </section>
  )
}

export default Eleicoes