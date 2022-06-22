let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for(i=0;i < numbers.length;i+=1){
    console.log(numbers[i]);
}
//2
resultado = 0;
for(i=0;i < numbers.length;i+=1){
 resultado = resultado+numbers[i];
}
console.log("Soma dos numeros: " + resultado);
//3
resultado2 = resultado / numbers.length;
console.log("Média aritimética: " + resultado2);
//4
if(resultado2 > 20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor ou igual a 20")
}
//5
let numeroMaior = 0;
for(i=0 ; i< numbers.length; i+=1){
 if(numbers[i] > numeroMaior){
    numeroMaior = numbers[i];
 }
}
console.log("O maior numero é: " + numeroMaior);
//6
let numerosImpar = 0;
for(i=0; i < numbers.length; i+=1){
    if(numbers[i] % 2 !== 0){
        numerosImpar +=1;
    }else if(numerosImpar === 0){
        console.log("nenhum valor ímpar encontrado!")
    }
}
console.log("Numeros Impares :" + numerosImpar);
//7
let numeroMenor = numeroMaior;
for(i=0 ; i< numbers.length; i+=1){
    if(numbers[i] < numeroMenor){
       numeroMenor = numbers[i];
    }
   }
console.log("O menor numero é: "+numeroMenor);
//8
let lista = [];
let addNumero = 0;
for(i = 0; i < 25; i+=1){
addNumero+=1;
lista.push(addNumero)
}
console.log(lista);
//9
let listaDividida = [];
for(i =0 ; i< lista.length; i+=1){
 listaDividida.push(lista[i] / 2);  
}
console.log(listaDividida);
