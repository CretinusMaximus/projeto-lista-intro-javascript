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
  const altura = prompt("Digite a altura do retângulo: ")
  const largura = prompt("Digite a largura do retângulo: ")
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual é o ano atual? ")
  const anoNascimento = prompt("Qual é o ano do seu nascimento? ")
  let idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura)
  return imc.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é seu nome? ")
  const idade = prompt("Qual é sua idade? ")
  const email = prompt("Qual é seu email? ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Qual é sua cor favorita? ")
  let cor2 = prompt("Qual é sua segunda cor favorita? ")
  let cor3 = prompt("Qual é sua terceira cor favorita? ")
  let respostasArray = [cor1, cor2, cor3]
  console.log(respostasArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.slice(-1)[0]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Digite o ano atual:");
  const anoNascimento = prompt("Digite o ano de nascimento:");
  let anoEmissao = prompt("Digite o ano de emissão do RG:");

  let precisaRenovarMenosDe20Anos = ((anoAtual - anoEmissao) >= 5) || ((anoAtual - anoNascimento) < 20);
  let precisaRenovarEntre21e50Anos = ((anoAtual - anoEmissao) >= 10) || ((anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50);
  let precisaRenovarMaisDe50Anos = ((anoAtual - anoEmissao) >= 15) || ((anoAtual - anoNascimento) > 50);

  console.log(precisaRenovarMenosDe20Anos && precisaRenovarEntre20e50Anos && precisaRenovarMaisDe50Anos);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplo400 = ano % 400 === 0
  const multiplo100 = ano % 100 === 0
  const multiplo4 = ano % 4 === 0
  return multiplo400 || (multiplo4 && !multiplo100)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const mais18 = prompt("Você tem mais de 18 anos?") === "sim";
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo?") === "sim";
  const disponibilidadeHorarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim";

  console.log(mais18 && ensinoMedioCompleto && disponibilidadeHorarios);
}

/* >>>>>O "Executar todos" do testador não tá funcionando. Tava funcionando quando eu comecei os exercícios, mas parou uma hora e nunca mais voltou. Não consegui descobrir o motivo, testei um a um manualmente.
O 13 tá meio estranho. O testador fala que passou, mas o texto dele permanece preto (não fica verde). Não sei se isso significa que algo errado não tá certo. */