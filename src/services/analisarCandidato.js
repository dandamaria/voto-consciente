//atualmente irá simular a IA e futuramente chamar API.
export function analisarCandidato(candidato, categoria) {

  const posicoes = [
    "a favor",
    "contra",
    "misto",
    "neutro"
  ]

  const todasPropostas = candidato.propostas[categoria] ?? []

  //indice é um valor inteiro = módulo de [número do id do candidato (vai de 1 á 13) + qtd de propostas deste candidato na categoria selecionada] por [tamanho de posicoes]
  const indice = (candidato.id + categoria.length) % posicoes.length

  return {
    posicao: posicoes[indice],
    propostasOrdenadas: todasPropostas
  }
}