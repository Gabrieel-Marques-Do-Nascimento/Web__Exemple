/* Iniciamos o Quokka para você automaticamente neste arquivo.
  *
  * Para abrir um novo arquivo Quokka:
  * - Pressione `Ctrl K, J` para criar um novo arquivo JavaScript
  * - Pressione `Ctrl K, T` para criar um novo arquivo TypeScript
  * - Pressione `Ctrl K, L` para abrir uma amostra interativa de:
  * https://github.com/wallabyjs/interactive-examples
  *
  * Para iniciar/reiniciar o Quokka em um arquivo existente:
  * - Pressione `Ctrl K, Q`
*/

// Veja a saída de console.log ao lado do seu código
const quokka = { isAwesome: true };

console.log(quokka);

//  Veja o valor de uma variável simplesmente digitando seu nome
quokka;

// Use expressão de sequência para comparar objetos
const wallaby = { "is Quokka's BigBrother": true };

(quokka, wallaby)

// Indicadores de medianiz mostram qual código foi executado (cobertura de código)

 // Indicadores laranja significam que apenas parte da linha foi executada
 // porque o JavaScript para de processar após o primeiro valor falso
console.log('partialCoverage', false && true);

// Indicadores verdes significam que Quokka executou todas as instruções
 //em uma linha de código
if (false) {
// Indicadores brancos significam que uma linha de código nunca foi
   //executado por Quokka
  console.log('noCoverage', true);
}

// Os indicadores vermelhos mostram onde ocorreu um erro.  A mensagem de erro
 // também é mostrado ao lado do erro
throw new Error('Something went wrong');
// Há muito mais que Quokka pode fazer!  Visite nossos documentos para saber mais:
// - https://quokkajs.com/docs/
