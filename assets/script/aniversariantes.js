const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Lucas',
    descricao: '01 de Setembro',
    setor: 'Setor: PCP'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Rafael',
    descricao: '01 de Setembro',
    setor: 'Setor: TI'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Rhennan',
    descricao: '11 de Setembro',
    setor: 'Setor: SAC'
  },
    {
    imagem: 'assets/images/aniversariante/anv04.png',
    titulo: 'Aniversariante',
    nome: 'Marcos',
    descricao: '18 de Setembro',
    setor: 'Setor: Expedição'
  },
    {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Yuri',
    descricao: '25 de Setembro',
    setor: 'Setor: PCP'
  },
    {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Murillo',
    descricao: '26 de Setembro',
    setor: 'Setor: Montagem'
  },
    {
    imagem: 'assets/images/aniversariante/anv07.png',
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
