const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Eliana',
    descricao: '06 de Fevereiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Patricia Lukasavicus',
    descricao: '06 de Fevereiro',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Nicolle',
    descricao: '06 de Fevereiro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Nicolas',
    descricao: '08 de Fevereiro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Jaqueline',
    descricao: '17 de Fevereiro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Cido',
    descricao: '17 de Fevereiro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpg',
    titulo: 'Aniversariante',
    nome: 'Jessica',
    descricao: '22 de Fevereiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.png',
    titulo: 'Aniversariante',
    nome: 'Mateus',
    descricao: '27 de Fevereiro',
    setor: 'Setor: Expedição'
  },

  {
    imagem: 'assets/images/aniversariante/anv09.jpg',
    titulo: 'Aniversariante',
    nome: 'Richard',
    descricao: '27 de Fevereiro',
    setor: 'Setor: Expedição'
  },
 
 
  // ... Outras informações dos aniversariantes
];

let currentAniversariante = 0;

function showAniversariante(index) {
  const aniversarianteAtual = aniversariantes[index];
  
  document.getElementById('img').src = aniversarianteAtual.imagem;
  document.getElementById('titulo').textContent = aniversarianteAtual.titulo;
  document.getElementById('nome').textContent = aniversarianteAtual.nome;
  document.getElementById('desc').textContent = aniversarianteAtual.descricao;
  document.getElementById('setor').textContent = aniversarianteAtual.setor;
}

function nextAniversariante() {
  currentAniversariante = (currentAniversariante + 1) % aniversariantes.length;
  showAniversariante(currentAniversariante);
}

setInterval(nextAniversariante, 5000);
showAniversariante(currentAniversariante);
