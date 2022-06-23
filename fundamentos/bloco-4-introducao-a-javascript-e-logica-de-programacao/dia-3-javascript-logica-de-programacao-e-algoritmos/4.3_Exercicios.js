//1
let resultado =10;

for(i = resultado-1 ; i > 0 ; i-=1){
resultado = resultado * i;
}
console.log("Fatorial de 10: "+resultado);
//2
let word = "tryber";
let drow = "";
for(i = word.length-1; i >= 0; i -=1){
drow += word[i];
}
console.log("Palavra ao contrario: " +drow);
//3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = [array[i]];
let menor = "";
for(let i = 0; i < array.length;i +=1){
// if(array[i] > maior){
//     maior = array[i]
// }
//console.log(array[i]);
if(maior < array[i]){
    maior = array[i];
    
}
}
console.log("maior palavra: " + maior);
let primosMaior = 0;
let primosMenor = 50;
let resultado2 = 0;

for(let i = 2; i <=50; i+=1){
    //console.log(i)
    if(i % 2 !== 0 || i === 2){
    resultado2 = i;
   // console.log(resultado2);
   if(resultado2 > primosMaior){
    primosMaior = resultado2;
   }
   if(resultado2 < primosMenor){
    primosMenor = resultado2;
   }
    }
   
}
console.log("Maior numero Primo: " + primosMaior);
console.log("Menor numero Primo: " + primosMenor);
