// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Altura?'))
  const largura = Number(prompt('Largura?'))

  const calc = altura * largura
  console.log(calc)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual?'))
  const anoUser = Number(prompt('Ano de nascimento?'))

  const calc = anoAtual - anoUser
  console.log(calc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calcImc = peso / (altura * altura)
  return calcImc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Seu nome?')
  const idade = Number(prompt('Sua idade?'))
  const email = prompt('Seu e-mail?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
 const corFavorita1 = prompt(`Cor favorita 1:`)
 const corFavorita2 = prompt(`Cor favorita 2:`)
 const corFavorita3 = prompt(`Cor favorita 3:`)

const arrayCores = [corFavorita1,corFavorita2,corFavorita3]

 console.log(arrayCores)
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const alteraString = string.toUpperCase()

  return alteraString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const calc1 = custo/valorIngresso

  return calc1
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
  const tamanho2 = string2.length

  const compara = tamanho1 === tamanho2
  return compara

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]

  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.pop()
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const pegaPrimeira = array[0]
  const pegaUltima = array[array.length - 1]
  array.shift()
  array.pop()
  array.push(pegaPrimeira)
  array.unshift(pegaUltima)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const compara = string1.toUpperCase() === string2.toUpperCase()
  return compara

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Qual ano atual:`))
  const anoNascimento = Number(prompt(`Qual ano de nascimento:`))
  const anoId = Number(prompt(`Ano da emissão da ID:`))

  const idadePessoa = anoAtual - anoNascimento

  const checar1 = (idadePessoa <= 20) && (anoId + 5) <= anoAtual
  const checar2 = (idadePessoa > 20 && idadePessoa <=50) && (anoId+ 10) <= anoAtual
  const checar3 = (idadePessoa > 50) && (anoId + 15) < anoAtual

  console.log(checar1 || checar2 || checar3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicao1 = ano % 400 === 0
  const condicao2 = (ano % 4 === 0) && !(ano % 100 === 0 && ano % 400 !== 0)

  return (condicao1 || condicao2)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  //implemente sua lógica aqui
  const mais18 = prompt(`Você tem mais de 18 anos?:`)
  const mais19 = prompt(`Você possui ensino médio?:`)
  const mais20 = prompt(`Você possui disponibilidade...?:`)

  const compara1 = (mais18 === 'sim') && (mais19 === 'sim') && (mais20 === 'sim')

  console.log(compara1)

}