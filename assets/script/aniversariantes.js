const aniversariantes = [
  {
    imagem: 'assets/images/aniversariante/anv07.png',
    titulo: 'Aniversariante',
    nome: 'Renato',
    descricao: '25 de Junho',
    setor: 'Setor: Supervisor'
  },
  {
    imagem: 'assets/images/aniversariante/anv01.png',
    titulo: 'Aniversariante',
    nome: 'Ellen',
    descricao: '04 de Julho',
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
    imagem: 'assets/images/aniversariante/anv03.jpg',
    titulo: 'Aniversariante',
    nome: 'Larissa',
    descricao: '06 de Julho',
    setor: 'Setor: Vendas'
  },
  {
    imagem: 'assets/images/aniversariante/anv04.jpg',
    titulo: 'Aniversariante',
    nome: 'Yasmin',
    descricao: '07 de Julho',
    setor: 'Setor: Expedição'
  },
  {
    imagem: 'assets/images/aniversariante/anv05.jpg',
    titulo: 'Aniversariante',
    nome: 'Marcus',
    descricao: '08 de Julho',
    setor: 'Setor: Montagem'
  },
  {
    imagem: 'assets/images/aniversariante/anv06.jpg',
    titulo: 'Aniversariante',
    nome: 'Sara',
    descricao: '10 de Julho',
    setor: 'Setor: Prod. Reles'
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
