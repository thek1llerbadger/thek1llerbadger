// Exercício 01

let alunoUm = 'Gabriel'
let alunoDois = 'Camila'

let idadeum = 18
let idadedois = 19

console.log('A idade de ' + alunoUm + ' é ' + idadeum)
console.log('A idade de ' + alunoDois + ' é ' + idadedois)
console.log('A soma das idades totaliza: ' + (idadeum + idadedois))

// Exercício 02

let numeroqualquer = 5

let antcalc = numeroqualquer - 1
let succalc = numeroqualquer + 1

console.log('O número escolhido é ' + numeroqualquer + ', seu antecessor é ' + antcalc + ' e seu sucessor é ' + succalc)
// ou
console.log(`O número escolhido é ${numeroqualquer}, seu antecessor é ${antcalc} e seu sucessor é ${succalc}.`)

// Exercício 3

let idade = 18

// if | condicional
if(idade >= 18){
    console.log("Pode beber")
}else{
    console.log("Não pode beber")
}
// else | caso condição não seja suprida

// Exercício 4

let pagamento = false; // Boolean | verdadeiro ou falso

if(pagamento){
    console.log("Pode consumir")

}else{
    console.log("Não pode consumir")
}

// Exercício 5: Escreva um programa que lê o ano de nascimento de uma pessoa e imprima no console se a pessoa pode ou não votar.

let nome = prompt("Escreva seu nome")
let age = prompt("Escreva seu ano de nascimento")

let idademin = 2008

if(age <= idademin){
    console.log(`${nome}, você, nascido(a) em ${age}, pode votar`)
}else{
    console.log(`${nome}, você, nascido(a) em ${age}, não pode votar`)
}

// Resolução melhor (Exemplo)

let dataAtual1 = new Date()
let usuário1 = prompt("Escreva seu ano de nascimento")

let IdadeFinal1 = dataAtual1.getFullYear() - usuário1

console.log(IdadeFinal1)

if(IdadeFinal1 >= 18){
    console.log("Pode votar")
}else{
    console.log("Não pode votar")
}

// Variação | Voto não obrigatório

let dataAtual = new Date()
let usuário = prompt("Escreva seu ano de nascimento")

let IdadeFinal = dataAtual.getFullYear() - usuário

console.log(IdadeFinal)

if(IdadeFinal >= 18){
    console.log("Pode votar.")
}else if (IdadeFinal >= 16 && IdadeFinal < 18){
        console.log("Pode votar, mas não é obrigatório.")
}
else if (idadeFinal < 16){
    console.log("Não pode votar")
}

// Exercício 6 | ler dois valores, imprimir o maior ou dizer se são iguais

let numero1 = Number(prompt("Escolha um número para comparar"))
let numero2 = Number(prompt("Escolha outro número"))
// Number foi usado para converter o valor do prompt em numeral

if(numero1 === numero2){
    console.log("Os números são iguais")
}else if(numero1 > numero2){
    console.log(`${numero1} é maior do que ${numero2}`)
}else{
    console.log(`${numero2} é maior do que ${numero1}`)
}

// Exercício 7 | Criar uma média de notas e dizer se foi ou não aprovado
 
let not1 = Number(prompt("Digite sua nota 1."))
let not2 = Number(prompt("Digite sua nota 2."))
let not3 = Number(prompt("Digite sua nota 3."))

let conta = ((not1 + not2 + not3) / 3).toFixed(1)

if (conta >= 7){
    console.log(`Você foi aprovado com uma média de ${conta}`)
}else{
    console.log(`Você não foi aprovado, sua média foi ${conta}`)
}

