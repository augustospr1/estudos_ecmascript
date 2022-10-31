// ############### Nullish Coalescing Operator ###############
// Para o javascript os valores 0, '', [], false, undefined, null => São valores falsy quando são trazidos para o operador ou ||
// Então no ecmascript nós usamos o Nullish Coalescing Operator '??' pois ele consegue olhar para esses valores 'Não válidos'
// const idade = 0;

// document.body.innerText = 'Sua idade é: ' + (idade ?? 'Não informado');

// ############### Objeto ###############

// const user = {
//   name: 'Diego',
//   idade: 27,
//   address: {
//     street: 'Rua Teste',
//     number: 176,
//   },
// };

// document.body.innerText = ('name' in user) // Método 'in' que ele identifica se existe informção dentro do objeto.

// document.body.innerText = Object.keys(user) // Esse método busca todas as chaves dentro do objeto que é passado.

// document.body.innerText = Object.values(user) // Esse método busca todos os valores das chaves do objeto.

// document.body.innerText = JSON.stringify(Object.values(user)) // Esse método permite buscar os valores de objetos que estão dentro de outro objeto, de uma forma mais detalhada.

// document.body.innerText = JSON.stringify(Object.entries(user)) // Esse método retorna um vetor com vários vetores dentro, sendo que em cada vetor ele passará uma chave(key) do objeto e também passará o valor(value) da chave.

// ############### Desestruturação ###############

// const { address, idade: age } = user // Para desestruturar, cria-se uma nova variável e atribui a ela o objeto. E além disso também há a possibilidade de renomearmos as variáveis colocando ela dentro de chaves {} e renomeando com dois pontos ex: Idade: age;

// document.body.innerText = JSON.stringify({ address , age }) // E aqui é passado os valores já desconstruídos além da variável já renomeada.


// Nessa função foi desestruturado o objeto user, para mostrar somente a chave(key) idade do onbjeto User.
// function mostraIdade(user) { 
//   return user.idade;
// }

// Além disso nós também podemos passar objetos como parâmetro para uma função, já desestruturando ele.
// function mostraIdade({ idade }) {
//   return idade;
// }

// document.body.innerText = mostraIdade(idade); // Aqui é retornado o valor capturado pela função.

// ############### Rest Operator ###############

// const { name, ...rest } = user; // o '...rest' retorna o restante do valor ou seja o valor que não foi citado na passagem.

// document.body.innerText = JSON.stringify(rest) // Ele vai retornar todo o restante do objeto User que não seja o 'name'.

// Exemplos de Rest Operator com arrays

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const first = array[0]; // Variáveis para pegar da variável 'array' a posição 0 da lista
// const second = array[1]; // Variáveis para pegar da variável 'array' a posição 1 da lista

// document.body.innerText = JSON.stringify({ first, second }) // Mostrando os valores que foram retirados do array.

// const [first, second, ...rest] = array; // Passado os valores e o ...rest

// document.body.innerText = JSON.stringify({ first, second, rest }) // Aqui passamos os dois primeiros valores do array e o restante dele.

// ############### Optional Chaining ###############

// const user = {
//   name: 'Diego',
//   age: 27,
//   address: {
//     street: 'Rua Teste',
//     number: 176,
//     zip: {
//       code: '38408000',
//       city: 'Rio do Sul',
//     },
//     showFullAddress() {
//       return 'ok';
//     }
//   },
// };

// document.body.innerText = user.address 
//   ? user.address.zip 
//     ? user.address.zip.code  // Com esse código BRUTO nós verificamos se existe primeiramente o Address e se existir, nós tentamos pegar o zip, e se caso exista ele imprime o valor do zip code, se não ele aparece 'Não informado'.
//     : 'Não informado' 
//   : 'Não informado'

// E simplificando nós usamos o Optional Chaining:

// document.body.innerText = user.address?.zip?.code ?? 'Não informado'; // Código simplificando

document.body.innerText = user.address?.showFullAddress();