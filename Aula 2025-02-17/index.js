// Exercício 1: Arrow Function com um parâmetro
// Crie uma arrow function chamada dobro que recebe um número e
// retorna o dobro dele.
// Dica: Não use {} nem return, pois a função pode ser simplificada.
const dobro = x => x*2
console.log(dobro(7)); // 14
console.log(dobro(15)); // 30

// Exercício 2: Arrow Function com múltiplos parâmetros
// Crie uma arrow function chamada dividir que recebe dois números e
// retorna o resultado da divisão do primeiro pelo segundo.
const dividir = (x, y) => x/y
console.log(dividir(10, 2)); // 5
console.log(dividir(9, 3));  // 3

// Exercício 3: Arrow Function com múltiplas linhas
// Crie uma arrow function chamada mensagemBoasVindas que
// recebe um nome e retorna uma mensagem de boas-vindas no
// formato "Seja bem-vindo, [nome]!".
const mensagemBoasVindas = nome => {
    return `Seja bem-vindo, ${nome}!`
}
console.log(mensagemBoasVindas("Carlos")); // "Seja bem-vindo, Carlos!"
console.log(mensagemBoasVindas("Ana"));    // "Seja bem-vindo, Ana!"

// Exercício 4: Higher-Order Function personalizada
// Crie uma função chamada executarOperacao que recebe três parâmetros:
// dois números e uma função que representa uma operação matemática
// (adição, subtração, multiplicação ou divisão).
// Em seguida, chame essa função passando diferentes operações
// matemáticas como arrow functions.
const executarOperacao = (a, b, cb) => cb(a, b)
console.log(executarOperacao(6, 3, (a, b) => a - b)); // 3
console.log(executarOperacao(4, 5, (a, b) => a * b)); // 20

// Exercício 5: map() – Transformação de um array
// Crie um array de preços de produtos e use o método map()
// para aplicar um desconto de 10% em cada preço.
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(x => x*0.9)
console.log(precosComDesconto); // [90, 180, 270, 360]

// Exercício 6: filter() – Filtrando valores em um array
// Crie um array com idades e use o método filter() para
// retornar apenas as idades menores que 18 anos.
const idades = [12, 25, 17, 30, 14, 19];
const menoresDeIdade = idades.filter(x => x < 18)
console.log(menoresDeIdade); // [12, 17, 14]

// Exercício 7: reduce() – Somando valores de um array
// Crie um array com números e use o método reduce() 
// para calcular o produto (multiplicação de todos os números).
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((a, b) => a*b)
console.log(produto); // 120 (pois 2 * 3 * 4 * 5 = 120)
