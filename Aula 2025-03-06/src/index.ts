// Exercício 1
interface Carro {
    marca: string
    modelo: string
    ano: number
    motor?: string
}
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Sportage",
    ano: 2026,
    motor: "Vrum vrum v7.1",
}
console.log(meuCarro)


// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number
}

const multiplicar: Multiplicacao = (a, b) => a*b

console.log(multiplicar(2, 6))


// Exercício 3
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

console.log(inverterArray([1,2,3,4,5]))
console.log(inverterArray(["a","b","c","d","e"]))


/* Exercício 4
  Crie uma interface genérica chamada Repositorio<T>,
  que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
  Depois, crie uma implementação dessa interface
  para armazenar uma lista de usuários (com nome e email).
*/

class Repositorio<T> {
    private conteudo: T[] = []
    salvar(dado: T): void {
        this.conteudo.push(dado)
    }
    obterTodos(): T[] {
        return this.conteudo
    }
}

interface Usuario {
    nome: string
    email: string
}

const meuRepositorio = new Repositorio<Usuario>()
meuRepositorio.salvar({nome: "Jéfferson", email: "je_caminhoes@hotmail.com"})
console.log(meuRepositorio.obterTodos())

/* Exercício 5
  Crie um Type Alias chamado RespostaServidor,
  que pode ser uma string ou um boolean.
  Depois, crie uma função chamada processarResposta
  que recebe um valor desse tipo e imprime uma mensagem
  no console dependendo do valor passado.
*/

type RespostaServidor = string | boolean

function processarResposta(resposta: RespostaServidor) {
    if (typeof resposta === "string") {
        return "A resposta do servidor foi: " + resposta
    }
    return "A resposta do servidor foi: " + resposta ? "Sim" : "Não"
}


/* Exercício 6
  Utilizando Intersection Types, crie um tipo EstudanteTrabalhador,
  que una as propriedades de um Estudante (nome e curso)
  e de um Trabalhador (empresa e cargo).
  Depois, crie um objeto que represente um estudante que
  também trabalha e exiba os dados no console.
*/
type Estudante = {
    nome: string,
    curso: string,
}
type Trabalhador = {
    empresa: string,
    cargo: string,
}
type EstudanteTrabalhador = Estudante & Trabalhador

const meuEstudante: EstudanteTrabalhador = {
    nome: "Joãozinho",
    curso: "Economia",
    empresa: "Jéfferson Caminhões Ltda",
    cargo: "Recepcionista",
}
console.log(meuEstudante)
