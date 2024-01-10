// Exercicio 1
// function contarCaracteres(texto) {
//     return texto.length;
// }

// // Exemplo de uso:
// var minhaString = "Olá, mundo!";
// var tamanho = contarCaracteres(minhaString);
// alert(tamanho); // Saída: 11

// Exercicio 2
// function inicio(){
//     let nome = window.prompt(`Qual é seu nome?`)
//     let idade = window.prompt(`Qual é sua idade?`)
//     let altura = window.prompt(`Qual é sua altura?`)

//     window.alert(`Oi, meu nome é ${nome}, eu tenho ${idade} e ${altura} metros de altura`)
// }

// inicio()

// Exercicio 3

// function eh_inteiro (inicial, final)
// {
//     if (!Number.isInteger(inicial) || !Number.isInteger(final)) {
//         alert("Por favor, forneça valores inteiros como parâmetros.");
//         return;
//       }
// }



// function numerosImparesNoIntervalo(inicial, final) {
    
//     eh_inteiro(inicial, final)
  
   
//     if (inicial > final) {
//       alert("O valor inicial deve ser menor ou igual ao valor final.");
//       return;
//     }
  
    
//     let numerosImpares = [];
  

//     for (let i = inicial; i <= final; i++) {
     
//       if (i % 2 !== 0) {
//         numerosImpares.push(i);
//       }
//     }
  
   
//     return numerosImpares;
//   }
  
  
//   const resultado = numerosImparesNoIntervalo(1, 100);
//   alert(resultado); 
