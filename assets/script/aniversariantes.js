const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Adilson',
    descricao: '02 de Junho',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv02.png',
    titulo: 'Aniversariante',
    nome: 'Ivania',
    descricao: '02 de Junho',
    setor: 'Setor: Pro. Reles'
  },
  {
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Kauan',
    descricao: '07 de Junho',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Eduardo',
    descricao: '21 de Junho',
    setor: 'Setor: Administrativo'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.png',
    titulo: 'Aniversariante',
    nome: 'Felipe',
    descricao: '24 de Junho',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.png',
    titulo: 'Aniversariante',
    nome: 'Renato',
    descricao: '25 de Junho',
    setor: 'Setor: Supervisor'
  },
  {
    imagem: 'assets/images/aniversariante/anv07.png',
    titulo: 'Aniversariante',
    nome: 'Debora',
    descricao: '30 de Junho',
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
