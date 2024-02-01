const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Ana Carolina',
    descricao: '03 de Fevereiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Patricia',
    descricao: '06 de Fevereiro',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.png',
    titulo: 'Aniversariante',
    nome: 'Jaqueline',
    descricao: '17 de Fevereiro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpeg',
    titulo: 'Aniversariante',
    nome: 'Jessica',
    descricao: '22 de Fevereiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.png',
    titulo: 'Aniversariante',
    nome: 'Priscila',
    descricao: '29 de Fevereiro',
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
