const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.jpg',
    titulo: 'Aniversariante',
    nome: 'Adilson ',
    descricao: '02 de Junho',
    setor: 'Setor: PCP'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.jpg',
    titulo: 'Aniversariante',
    nome: 'Kauan',
    descricao: '07 de Junho',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Daniel',
    descricao: '09 de Junho',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.png',
    titulo: 'Aniversariante',
    nome: 'Ana Paula',
    descricao: '12 de Junho',
    setor: 'Setor: Qualidade'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpeg',
    titulo: 'Aniversariante',
    nome: 'Eduardo',
    descricao: '21 de Junho',
    setor: 'Setor: Financeiro'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Felipe',
    descricao: '24 de Junho',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.png',
    titulo: 'Aniversariante',
    nome: 'Renato',
    descricao: '25 de Junho',
    setor: 'Setor: Supervisor'
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
