var estudantes = [
  { nome: "João", nota1: 8, nota2: 6 },
  { nome: "Maria", nota1: 7, nota2: 9 },
  { nome: "Pedro", nota1: 6, nota2: 5 },
  { nome: "Ana", nota1: 9, nota2: 8 },
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;}

  var mediaParaConcurso = 7;

  estudantes.forEach(function(aluno) {
    var mediaAluno = calcularMedia(aluno.nota1, aluno.nota2);
    var somaNotas = aluno.nota1 + aluno.nota2;
    var mensagem = aluno.nome + " obteve uma média de " + mediaAluno.toFixed(2) + " e uma soma de notas de " + somaNotas + ". ";
    
    if (mediaAluno >= mediaParaConcurso) {
        alert(mensagem + "Portanto, ele teve sucesso no concurso!");
    } else {
        alert(mensagem + "Portanto, ele não teve sucesso no concurso.");
    }
});

