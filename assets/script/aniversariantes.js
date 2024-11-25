const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Solange',
    descricao: '2 de Dezembro',
    setor: 'Setor: Limpeza'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.png',
    titulo: 'Aniversariante',
    nome: 'Drhavyt',
    descricao: '10 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Gustavo Paulino',
    descricao: '13 de Dezembro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Sofia Cunha',
    descricao: '14 de Dezembro',
    setor: 'Setor: Recepção'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Raphael Rosa',
    descricao: '15 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Manuela',
    descricao: '16 de Dezembro',
    setor: 'Setor: Adm'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpg',
    titulo: 'Aniversariante',
    nome: 'Lucas dos Santos',
    descricao: '17 de Dezembro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.jpg',
    titulo: 'Aniversariante',
    nome: 'Adriano Marcio',
    descricao: '20 de Dezembro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv09.jpg',
    titulo: 'Aniversariante',
    nome: 'Ana Paula Ferreira',
    descricao: '23 de Dezembro',
    setor: 'Setor: DP'
  },
  {
    imagem: 'assets/images/aniversariante/anv10.jpg',
    titulo: 'Aniversariante',
    nome: 'Joseano',
    descricao: '23 de Dezembro',
    setor: 'Setor: Jardinagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv11.jpg',
    titulo: 'Aniversariante',
    nome: 'Marcel',
    descricao: '26 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv12.jpg',
    titulo: 'Aniversariante',
    nome: 'Matheus Gabriel',
    descricao: '26 de Dezembro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv13.jpg',
    titulo: 'Aniversariante',
    nome: 'Henrique Junio',
    descricao: '28 de Dezembro',
    setor: 'Setor: SAC'
  },
  {
    imagem: 'assets/images/aniversariante/anv14.jpg',
    titulo: 'Aniversariante',
    nome: 'Raul Alvarez',
    descricao: '31 de Dezembro',
    setor: 'Setor: TI'
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
