// Função para obter dados da API de previsão do tempo
function getWeatherData(city) {
  const apiKey = '6bf1c1c6827b880293198fb4712ba3e4';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  return fetch(apiUrl)
      .then(response => response.json())
      .catch(error => console.error(error));
}

const weatherDescriptions = {
  'céu limpo': 'Céu limpo',
  'poucas nuvens': 'Poucas nuvens',
  'nuvens dispersas': 'Nuvens',
  'nuvens quebradas': 'Nublado',
  'nublado': 'Nublado',
  'neblina': 'Nublado',
  'chuva fraca': 'Chuva fraca',
  'chuva': 'Chuva', 
  'trovoadas': 'Trovoada',
  'neve': 'Neve',
  'névoa': 'Nublado',
  'algumas nuvens': 'Algumas nuvens',
  'trovoada com chuva fraca': 'Trovoada com chuva'
};

function getWeatherImageURL(description) {
  const weatherImageMap = {
      'céu limpo': 'assets/images/tempo/ceu-limpo.gif',
      'poucas nuvens': 'assets/images/tempo/poucas-nuvens.gif',
      'nuvens dispersas': 'assets/images/tempo/nuvens-dispersas.gif',
      'nuvens quebradas': 'assets/images/tempo/poucas-nuvens.gif',
      'nublado': 'assets/images/tempo/nublado.gif',
      'neblina': 'assets/images/tempo/nublado.gif',
      'chuva fraca': 'assets/images/tempo/chuva-fraca.gif',
      'chuva': 'assets/images/tempo/chuva.gif',
      'trovoadas': 'assets/images/tempo/trovoada.gif',
      'neve': 'assets/images/tempo/neve.gif',
      'névoa': 'assets/images/tempo/nublado.gif',
      'algumas nuvens': 'assets/images/tempo/poucas-nuvens.gif',
      'trovoada com chuva fraca': 'assets/images/tempo/chuva.gif'
  };

  return weatherImageMap[description] || 'default.png';
}

function updateWeatherWidget() {
  const weatherContainer = document.getElementById('prev_tempo');

  getWeatherData('São José do Rio Preto').then(data => {
      const temperature = data.main.temp.toFixed(1);
      const description = data.weather[0].description;
      const translatedDescription = weatherDescriptions[description] || description;
      const weatherImage = getWeatherImageURL(description);

      const weatherHTML = '<div class="prev_tempo_div" style="text-align: center;">' +
          `<img src="${weatherImage}" alt="Condições climáticas" width="100" height="100">` +
          `<p style="color: white; font-size: 32px; margin: 0">${temperature.substring(0, 2)}°C</p>` +
          `<p style="color: white; font-size: 26px">${translatedDescription}</p>` +
          '</div>';

      weatherContainer.innerHTML = weatherHTML;
  });
}

updateWeatherWidget();
setInterval(updateWeatherWidget, 10000); // 60000 ms = 60 s
