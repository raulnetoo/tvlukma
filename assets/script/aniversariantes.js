const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpeg',
    titulo: 'Aniversariante',
    nome: 'Matheus Borsani',
    descricao: '07 de Janeiro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpeg',
    titulo: 'Aniversariante',
    nome: 'Lukma Eletric',
    descricao: '09 de Janeiro',
    // setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpeg',
    titulo: 'Aniversariante',
    nome: 'Suelen',
    descricao: '10 de Janeiro',
    setor: 'Setor: Analise de Cred.'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpeg',
    titulo: 'Aniversariante',
    nome: 'Clau',
    descricao: '15 de Janeiro',
    setor: 'Setor: Faturamento'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpeg',
    titulo: 'Aniversariante',
    nome: 'Matheus Welington',
    descricao: '15 de Janeiro',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpeg',
    titulo: 'Aniversariante',
    nome: 'Marcelo Lukasavicus',
    descricao: '23 de Janeiro',
    setor: 'Setor: Diretoria'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.jpeg',
    titulo: 'Aniversariante',
    nome: 'Beatriz',
    descricao: '27 de Janeiro',
    setor: 'Setor: DP'
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
