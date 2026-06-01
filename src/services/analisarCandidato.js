//atualmente irá simular a IA e futuramente chamar API.
export function analisarCandidato(candidato, categoria, consulta) {

  const posicoes = [
    "a favor",
    "contra",
    "misto",
    "neutro"
  ]

  //essa função vai garantir que a mesma consulta (mesmo texto) gere os mesmos resultados 
  function gerarValorConsulta(consulta) {
    let soma = 0
    for (let i = 0; i < consulta.length; i++) {
        soma += consulta.charCodeAt(i) // Recupera o número Unicode exclusivo do caractere na posição i 
        //exemplo: 'A'tem o código 65 e 'B'tem o código 66. Então consulta = "AB" ia resultar em soma = 131
    }

    return soma
  }

  const todasPropostas = candidato.propostas[categoria] ?? []
  const valorConsulta = gerarValorConsulta(consulta)

  //indice é um valor inteiro = módulo de [número do id do candidato (vai de 1 á 13) + qtd de propostas deste candidato na categoria selecionada + o valor gerado pela função gerarValorConsulta] por [tamanho de posicoes]
  const indice = (candidato.id + categoria.length + valorConsulta) % posicoes.length

  return {
    posicao: posicoes[indice],
    propostasOrdenadas: todasPropostas
  }
}