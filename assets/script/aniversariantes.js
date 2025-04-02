const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpeg',
    titulo: 'Aniversariante',
    nome: 'Andreia',
    descricao: '02 de Abril',
    setor: 'Setor: DP'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Thaisa',
    descricao: '07 de Abril',
    setor: 'Setor: Fiscal'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpeg',
    titulo: 'Aniversariante',
    nome: 'Patricia',
    descricao: '22 de Abril',
    setor: 'Setor: DP'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Matheus',
    descricao: '25 de Abril',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.png',
    titulo: 'Aniversariante',
    nome: 'Rodrigo Lukasavicus',
    descricao: '25 de Abril',
    setor: 'Setor: Diretoria'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Marcus',
    descricao: '26 de Abril',
    setor: 'Setor: Montagem'
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
