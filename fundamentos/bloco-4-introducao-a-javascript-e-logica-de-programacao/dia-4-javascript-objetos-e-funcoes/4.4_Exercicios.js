//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem vinda, " + info.personagem)
//2
info["recorrente"] = info.recorrente;
info.recorrente = "Sim";
console.log(info); 
//3
for(let i in info){
console.log(i );
}
//4
for(let i in info){
    console.log(info[i]);
    }