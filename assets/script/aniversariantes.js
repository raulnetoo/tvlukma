const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpeg',
    titulo: 'Aniversariante',
    nome: 'Solange',
    descricao: '02 de Dezembro',
    setor: 'Setor: Copas'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpeg',
    titulo: 'Aniversariante',
    nome: 'Drhavyt',
    descricao: '10 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpeg',
    titulo: 'Aniversariante',
    nome: 'Raphael',
    descricao: '15 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpeg',
    titulo: 'Aniversariante',
    nome: 'Manuela',
    descricao: '16 de Dezembro',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Ana Paula Ferreira',
    descricao: '23 de Dezembro',
    setor: 'Setor: Recepção'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpeg',
    titulo: 'Aniversariante',
    nome: 'Joseano',
    descricao: '23 de Dezembro',
    setor: 'Setor: Jardinagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpeg',
    titulo: 'Aniversariante',
    nome: 'Henrique',
    descricao: '28 de Dezembro',
    setor: 'Setor: SAC'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.jpg',
    titulo: 'Aniversariante',
    nome: 'Raul',
    descricao: '31 de Dezembro',
    setor: 'Setor: T.I.'
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
