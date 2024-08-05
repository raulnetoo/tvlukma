const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Silvana Renata',
    descricao: '08 de Agosto',
    setor: 'Setor: Prod. Rele'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Beatriz dos Santos',
    descricao: '10 de Agosto',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Alan de Oliveira',
    descricao: '13 de Agosto',
    setor: 'Setor: Prod. Rele'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Mateus Pereira',
    descricao: '23 de Agosto',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.png',
    titulo: 'Aniversariante',
    nome: 'Luiz Rodrigues',
    descricao: '25 de Agosto',
    setor: 'Setor: Diretoria'
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
