//Declaração de variável sempre segue a estrutura:
//let nomeDaVariavel = valor;
let nome = 'Felipe Teixeira Moraes'; //variável do tipo texto (string)
let idade = 23; //variável do tipo número (number)
let vivo = false; //variável do tipo booleana (boolean)

let saida1 = 'Olá, ' + nome + '! Tudo bem com você?'; //Concatenação de texto
saida1 = `Olá, ${nome}! Você tem ${idade} anos!`; //Template string

console.log(saida1); //Console.log imprime o conteúdo dentro do parenteses no console do navegador

console.log(prompt('Qual seu nome?')); //Prompt abre uma caixa de texto que espera uma resposta do usuário
 
idade = prompt('Quantos anos você tem?'); //É possível salvar o valor retornado pelo prompt em uma variável
alert(`Você tem ${idade} anos.`); //Alert abre uma caixa do navegador com uma mensagem dentro (que está dentro do parenteses)

vivo = confirm('Você está vivo?'); //Confirm abre uma janela do navegador que espera que o usuário clique em um Ok ou Cancelar)
console.log(`Você está vivo? ${vivo}`);