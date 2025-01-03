const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Suelen',
    descricao: '10 de Janeiro',
    setor: 'Setor: Analise de Cred.'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Bruna',
    descricao: '13 de de Janeiro',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.png',
    titulo: 'Aniversariante',
    nome: 'Welington',
    descricao: '14 de de Janeiro',
    setor: 'Setor: Designer'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.JPEG',
    titulo: 'Aniversariante',
    nome: 'Clau',
    descricao: '15 de de Janeiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.png',
    titulo: 'Aniversariante',
    nome: 'Sofia Oliveira',
    descricao: '17 de de Janeiro',
    setor: 'Setor: Financeiro Lukbox'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.png',
    titulo: 'Aniversariante',
    nome: 'Silmar',
    descricao: '18 de de Janeiro',
    setor: 'Setor: PCP'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.png',
    titulo: 'Aniversariante',
    nome: 'Marcelo Lukasavicus',
    descricao: '23 de de Janeiro',
    setor: 'Setor: Diretoria'
  },
  {
    imagem: 'assets/images/aniversariante/anv08.jpg',
    titulo: 'Aniversariante',
    nome: 'Beatriz Lucas',
    descricao: '27 de de Janeiro',
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
