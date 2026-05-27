import Navbar from "./components/Navbar"
import QMR from "./components/QMR"
import Eleicoes from "./components/Eleicoes"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Navbar />
      <QMR />
      <Eleicoes/>
      <Footer/>
      
    </main>
  )
}

export default App