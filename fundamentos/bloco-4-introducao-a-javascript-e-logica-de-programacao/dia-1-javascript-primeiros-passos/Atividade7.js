let conceito = "";
let notaAtual = 90;

if(notaAtual >= 90){
    conceito = "A";
}else if(notaAtual >= 80){
    conceito = "B"; 
}else if(notaAtual >=70){
    conceito = "C";
}else if(notaAtual >= 60){
    conceito = "D";
}else if(notaAtual >=50){
    conceito = "E";
}else if(notaAtual < 50){
    conceito = "F";
}
console.log(conceito);
