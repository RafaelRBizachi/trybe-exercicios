const valorProduto = 20;
const valorVenda = 35;
let vendaTotal = (valorVenda * 1000) - (valorProduto * 1000);

let resultado = vendaTotal * 0.8;
console.log(resultado);
if(valorProduto < 0){
    console.log("numero invalido");

}
