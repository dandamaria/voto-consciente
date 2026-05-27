import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SobreNos from "./pages/SobreNos"
import Candidatos from "./pages/Candidatos"

function App() {
  return (
    <BrowserRouter>
      <main className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/candidatos" element={<Candidatos />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App