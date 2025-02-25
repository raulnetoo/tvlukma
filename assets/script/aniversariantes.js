const aniversariantes = [
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
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Priscila',
    descricao: '01 de Março',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Luzia',
    descricao: '03 de Março',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Gislane',
    descricao: '11 de Março',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Fernanda',
    descricao: '12 de Março',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Marcos',
    descricao: '28 de Março',
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
