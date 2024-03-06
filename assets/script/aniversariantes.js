const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Gabriela',
    descricao: '05 de Março',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Felipe Ferreira',
    descricao: '11 de Março',
    setor: 'Setor: Montagem'
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
    nome: 'Josué',
    descricao: '13 de Março',
    setor: 'Setor: PCP'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Lukma Recife',
    descricao: '16 de Março',
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpg',
    titulo: 'Aniversariante',
    nome: 'Carlinhos',
    descricao: '23 de Março',
    setor: 'Setor: PCP'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.jpg',
    titulo: 'Aniversariante',
    nome: 'Ellen',
    descricao: '26 de Março',
    setor: 'Setor: Compras'
  },
  {
    imagem: 'assets/images/aniversariante/anv09.jpg',
    titulo: 'Aniversariante',
    nome: 'Marquinhos',
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
