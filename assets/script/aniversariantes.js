const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv09.jpeg',
    titulo: 'Aniversariante',
    nome: 'Sabrina Lukasavicus',
    descricao: '30 de Setembro',
    setor: 'Setor: Compras'
  },
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Silvana Delgado',
    descricao: '08 de Outubro',
    setor: 'Setor: Prod. Rele'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.png',
    titulo: 'Aniversariante',
    nome: 'Marcelino',
    descricao: '09 de Outubro',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.png',
    titulo: 'Aniversariante',
    nome: 'Fabio Vieira',
    descricao: '15 de Outubro',
    setor: 'Setor: Prod. Rele'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.png',
    titulo: 'Aniversariante',
    nome: 'Michele',
    descricao: '30 de Outubro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.png',
    titulo: 'Aniversariante',
    nome: 'Anselmo',
    descricao: '31 de Outubro',
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
