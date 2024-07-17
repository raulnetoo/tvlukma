const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Ana Paula',
    descricao: '03 de Julho',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Taianny',
    descricao: '05 de Julho',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.png',
    titulo: 'Aniversariante',
    nome: 'Larissa',
    descricao: '06 de Julho',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.png',
    titulo: 'Aniversariante',
    nome: 'Caue',
    descricao: '09 de Julho',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Jucilene',
    descricao: '31 de Julho',
    setor: 'Setor: Faturamento'
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
