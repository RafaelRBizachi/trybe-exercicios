//1
function verificaPalindromo(nome){
let palavra = nome.split("");
let palavrarev = palavra.reverse();
let palavrajunt = palavrarev.join();
if(palavrajunt === palavra){
    return true;
}else{
    return false;
}
}
verificaPalindromo("arara");
//2
function NumeroMaior(array = [2,3,6,7,10,1]){
let array2 = array;
let maior = [];
let test = 0;
for(let i = 0; i < array2.length; i+=1){
    if(array2[i] > test){
        maior = array2[i];
        console.log(maior)
    }
}
return maior;
}
retult = NumeroMaior();
console.log(retult);