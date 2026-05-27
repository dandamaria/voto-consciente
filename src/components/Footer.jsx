function Footer() {
  return (
    <footer className="bg-green-600 mt-10 px-8 py-12 flex flex-col items-center gap-8">

      {/* Aviso */}
      <p className="text-white text-sm text-center">
        Atenção: somos um site independente - consulte todas as fontes e dados utilizados em{" "}
        <a href="#" className="underline font-semibold">Sobre nós</a>.
      </p>

      {/* Ícones de redes sociais */}
      <div className="flex gap-6">
        <a href="https://instagram.com" target="_blank" rel="noreferrer"
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:opacity-80">
          <img src="src\assets\insta.svg" alt="Instagram" className="w-10 h-10 object-contain" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:opacity-80">
          <img src="src\assets\youtube.svg" alt="YouTube" className="w-10 h-10 object-contain" />
        </a>
      </div>

      {/* Links */}
      <div className="flex gap-10">
        <a href="#" className="text-white font-medium hover:underline">Sobre nós</a>
        <a href="#" className="text-white font-medium hover:underline">Entre em contato</a>
        <a href="#" className="text-white font-medium hover:underline">Quem me representa</a>
      </div>

      {/* Linha divisória */}
      <hr className="w-full border-white/30" />

      {/* Créditos */}
      <p className="text-white/40 text-xs text-center">
        © 2026 Design by Dandara Maria | All Rights Reserved
      </p>

    </footer>
  )
}

export default Footer