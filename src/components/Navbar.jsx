import { useState } from "react"
import navbarBg from "../assets/navbar_fundo.png"

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav
      className="w-full"
      style={{
        backgroundImage: `url(${navbarBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Barra principal */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-black text-xl font-extrabold tracking-tight">
          INFOSVOTO
        </h1>

        {/* Links — só aparecem no desktop */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Botão de tema — só no desktop */}
        <button className="hidden md:flex w-12 h-6 bg-gray-200 rounded-full items-center px-1">
          <span className="w-4 h-4 bg-white rounded-full shadow"></span>
        </button>

        {/* Hamburguer — só no mobile */}
        <button
          className="md:hidden text-black text-2xl font-bold"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

      </div>

      {/* Menu mobile — abre e fecha */}
      {menuAberto && (
        <div className="md:hidden flex flex-col gap-2 px-6 pb-4">
          <a href="#" className="px-4 py-2 rounded-xl bg-white/80 text-gray-700 font-medium text-sm">
            Sobre nós
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 text-gray-700 font-medium text-sm">
            Quem me representa
          </a>
          <a href="#" className="px-4 py-2 rounded-xl bg-white/80 text-gray-700 font-medium text-sm">
            Conheça os candidatos
          </a>
        </div>
      )}

    </nav>
  )
}

export default Navbar