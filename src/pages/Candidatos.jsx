function Candidatos() {
  return (
    <div className="flex flex-col items-center justify-center py-32 gap-6">
      <img
        src="/src/assets/manutencao.svg"
        alt="Em breve"
        className="w-64 h-64 object-contain"
      />
      <p className="text-gray-500 text-lg font-medium">
        Esse serviço será disponibilizado em breve.
      </p>
    </div>
  )
}

export default Candidatos