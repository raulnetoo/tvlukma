const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Sabrina',
    descricao: '30 de Setembro',
    setor: 'Setor: Compras'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.png',
    titulo: 'Aniversariante',
    nome: 'Silvana',
    descricao: '08 de Outubro',
    setor: 'Setor: Prod. Reles'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Marcelino',
    descricao: '09 de Outubro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpeg',
    titulo: 'Aniversariante',
    nome: 'Fabio',
    descricao: '15 de Outubro',
    setor: 'Setor: Prod. Reles'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Rafael Carrilho',
    descricao: '27 de Outubro',
    setor: 'Setor: Pendência'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Diego Francisco',
    descricao: '29 de Outubro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpg',
    titulo: 'Aniversariante',
    nome: 'Beatriz Dias',
    descricao: '29 de Outubro',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.png',
    titulo: 'Aniversariante',
    nome: 'Michele Cristina',
    descricao: '30 de Outubro',
    setor: 'Setor: Vendas'
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
