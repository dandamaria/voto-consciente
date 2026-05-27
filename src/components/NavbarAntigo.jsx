import navbarBg from "../assets/navbar_fundo.png"

function Navbar() {
  return (
    <nav
      className="w-full flex items-center justify-between px-8 py-4"
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Logo */}
      <h1 className="text-black text-2xl font-extrabold tracking-tight">
        INFOSVOTO
      </h1>

      {/* Links do centro */}
      <div className="flex items-center gap-3">
        <a href="#" className="px-4 py-1.5 rounded-full border border-white/40 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium text-sm">
          Sobre nós
        </a>

        <a href="#" className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/40 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium text-sm">
          Quem me representa
        </a>

        <a href="#" className="px-4 py-1.5 rounded-full border border-white/40 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium text-sm">
          Conheça os candidatos
        </a>
      </div>

      {/* Botão de tema */}
      <button className="w-12 h-6 bg-gray-200 rounded-full flex items-center px-1">
        <span className="w-4 h-4 bg-white rounded-full shadow"></span>
      </button>

    </nav>
  )
}

export default Navbar