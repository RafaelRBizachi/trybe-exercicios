//1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    
};
  //console.log("Bem vinda, " + info.personagem)
//2
info["recorrente"] = info.recorrente;
info.recorrente = "Sim";

//console.log(info); 
//3
for(let i in info){
//console.log(i );
}
//4
for(let i in info){
  // console.log(info[i]);
    }
//5
info["info2"] = info.info2;
info.info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente : "Sim"
}
console.log(info.personagem + " e " + info.info2.personagem);
console.log(info.origem + " e " + info.info2.origem);
console.log(info.nota + " e " + info.info2.nota);
if(info.recorrente === "Sim" && info.info2.recorrente ==="Sim"){
console.log("Ambos são recorrentes");    
}
//6
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };    
  console.log("O livro favorito de "+leitor.nome + " " +leitor.sobrenome +" se chama " + leitor.livrosFavoritos[0].titulo);
  leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
  });
  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")