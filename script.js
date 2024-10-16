const apiKey = '35774cc368a1e191d9ee3a61d892fd6f';
const city = 'London,uk';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=fr`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    document.getElementById('temperature').textContent = `Température: ${temperature}°C`;
    document.getElementById('description').textContent = `Description: ${weatherDescription}`;
  })
  .catch(error => console.error('Erreur:', error));
