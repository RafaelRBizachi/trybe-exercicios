const SalarioBruto = 1000;
let porcentagem = "";
let valorDescontado = "";
let salarioLiquido = ""

if(SalarioBruto < 1556.94){
porcentagem = 0.08;
valorDescontado = SalarioBruto * porcentagem;
}else if(SalarioBruto < 2594.92){
    porcentagem = 0.09;
    valorDescontado = SalarioBruto * porcentagem;
}else if(SalarioBruto < 5189.82){
    porcentagem = 0.11;
    valorDescontado = SalarioBruto * porcentagem;
}else{
    valorDescontado = 570.88;
}
salarioLiquido = SalarioBruto - valorDescontado;
console.log(porcentagem)
console.log(salarioLiquido)
