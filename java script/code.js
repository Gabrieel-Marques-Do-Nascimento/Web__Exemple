
// anotacao simples de linha 
/* anotacao simples de paragrafo */

/** 
* @return total sum
function sum( ...nome)  // utilizando ...nome da variavel arry a funcao aseita quantos parametro vc quiser
Ex : sum(1 , 2 ,3 ,4) // po diante
*/
function sum(...args) {
    let total = 0;
    for (let a of args) {
       
        total += a;
    }
    return total
}
console.log('TOTAL', sum( 6,2,4,3,7));






// /*funcao = trcho de codego q so e executado quando chamado/invocado

// funcao void (vazio)
// funcao  com parametros (s)
// funcao  return  // retortna augo para quem chama
// funcao    arrow / arrow function

// ps : tente fazer sua funcao com uma unica ação principal

// F8 = start
// */


//  /* variavel */let valor = 21
// function incremento() {  // função void
//  console.log("estou na função")
//  valor += 30
// }
//  //   incremento() // chamado da função
// //  console.log(valor)


// // parameter e a mesma coisa q uma variavel ex: let valor = 21
// function mostrarnome(nomedapessoa) {    //  funcao noma da função ( valor da função)
     
//     console.log(nomedapessoa) // parametro nomedapessoa so pode seer usado dentro da funcao
// }
// mostrarnome("gabriel")  // ("gabriel") = nomedapessoa
// // pode se chamado varias vezes com valores diferenes
// mostrarnome("helo whord")  // ("helo whord") = nomedapessoa


// // função void
// function soma(num1 , num2) { // apos virgula pode ser definido quantos parametros quiser ex; valor , valor ,......
//     /* variavel */const somadosnum = num1 + num2
//     console.log(somadosnum)
// }
// soma(10,5) // 10 = num1 e  5 = num2
// // valor e definido assim
// soma(4,5)




// function soma2 (num01 , num02) {  // funcao  return  // retortna augo para quem chama
//     // soma os numeros e guardando na variavel
//     /* variavel */const meusNum = num01 + num02
   
//     // retorna o numero para quem chamou
//     return meusNum
// }

// const numeross = soma2(5,7)

// console.log(numeross)





// funcao    arrow / arrow function  // seta =>
/*
const Multi = ( Numero01 , Numero02 ) => {   //  parametro pode ter o mesmo nome em varias funções diferentes por q nao funciona fora da função

const vezes = Numero01 * Numero02
return  vezes
}

const vezess = Multi(4,2)
console.log(vezess)



// funcao       parametro                  return                     numro01 X numero02         
const Multip = ( Numero01 , Numero02 ) =>/*como se tivese um return / *  Numero01 * Numero02
    */
    
    
    
















