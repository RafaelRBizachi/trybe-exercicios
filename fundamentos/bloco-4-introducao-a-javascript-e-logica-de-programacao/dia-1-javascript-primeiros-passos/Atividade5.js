const anguloInterno = 180;

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

if(ladoA + ladoB + ladoC === anguloInterno){
    console.log(true);
}else if (ladoA + ladoB + ladoC < anguloInterno){
    console.log(false);
}else if(ladoA + ladoB + ladoC > anguloInterno){
    console.log(false);
}else if(ladoA + ladoB + ladoC < 0){
    console.log("numeros invalidos");
}