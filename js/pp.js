const apiKey = '35774cc368a1e191d9ee3a61d892fd6f';
 
/* Appel a lAPI OpenWeatherMap avec ville en parametre de fonction*/
let apiCall = function(city){

  let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=fr `;
  fetch(url).then((reponse)=>
    reponse.json().then((data)=>{
      console.log(data);
      document.querySelector('#city').innerHTML =data.name;
      document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-half'></i>" +data.main.temp + '°';
      document.querySelector('#humidity').innerHTML = '<i class="fas fa-tint"></i>'+ data.main.humidity + '%';
      document.querySelector('#wind').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    })
    )
    .catch (error => console.error('error:',error));
}
/* Ecouteur D'evenement  sur soumission du formulaire*/
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();

let ville = document.querySelector('#inputCity').value;

apiCall(ville);
});

//appel par defaut au chargement de la page
apiCall('Rouen');