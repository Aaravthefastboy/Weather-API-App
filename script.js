function getweatherdata(location){
  const apiKey = "29bb556ad45016ef7ad75b75cf3df68e"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
  return fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weatherdata = {
      tempr: data.main.temp,
      condition: data.weather[0].main,
      location: data.name,
    };
    return weatherdata; 
  });
}

function updateUI(weatherdata){
  const tempr = document.querySelector('#tempr');
  const condition = document.querySelector('#condition');
  const location = document.querySelector('#location');
  tempr.textContent = `${weatherdata.tempr}°C`;
  condition.textContent = weatherdata.condition;
  location.textContent = weatherdata.location;
}

const searchbt = document.querySelector('#search');
const input = document.querySelector('#input-bar');

searchbt.addEventListener("click", ()=>{
  const location = input.value;
  getweatherdata(location)
    .then((weatherdata) =>{
      updateUI(weatherdata);
    })
    .catch((error) =>{
      console.log(error);
    });
});