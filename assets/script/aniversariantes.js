const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpeg',
    titulo: 'Aniversariante',
    nome: 'Chirlene',
    descricao: '05 de Setembro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Jhonatas',
    descricao: '08 de Setembro',
    setor: 'Setor: Montagem'
  },
 
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Cindhel',
    descricao: '09 de Setembro',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpeg',
    titulo: 'Aniversariante',
    nome: 'Marcos',
    descricao: '18 de Setembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpeg',
    titulo: 'Aniversariante',
    nome: 'Ari',
    descricao: '19 de Setembro',
    setor: 'Setor: Motorista'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpg',
    titulo: 'Aniversariante',
    nome: 'Barbara',
    descricao: '20 de Setembro',
    setor: 'Setor: ADM'
  },
  {
    imagem: 'assets/images/aniversariante/anv09.jpeg',
    titulo: 'Aniversariante',
    nome: 'Sabrina',
    descricao: '30 de Setembro',
    setor: 'Setor: Compras'
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
