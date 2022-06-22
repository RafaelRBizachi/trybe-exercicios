let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numero1 = 0;
let numero2 = 0;
let numbersMulti = [];
for(i = 0; i< numbers.length; i+=1){
    numero1 = numbers[i];
    numero2 = numbers[i+1];
    numbersMulti.push(numero1 * numero2)
    console.log("numero1: "+ numero1);
    console.log("numero2: "+ numero2);
    
 }
 console.log(numbersMulti);