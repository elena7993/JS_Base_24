const API_KEY = "2ad06a4f944e2127313de92dc83a1b0f";
// =>전역함수로 빼자

const weather = (pos) => {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  const tempEl = document.querySelector('.temp_1 span');
  const cityEl = document.querySelector('.city_1 span');

  fetch(url).then((respond) => respond.json()).then((data) => {
      console.log(data);
      tempEl.innerText = data.main.temp;
      cityEl.innerText = data.name;
  });
  
};

navigator.geolocation.getCurrentPosition(weather);

// const weatherLA = (pos) => {
//   const API_KEY = "2ad06a4f944e2127313de92dc83a1b0f";
//   const lat = pos.coords.latitude;
//   const lon = pos.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
//   const tempEl = document.querySelector('.temp_2 span');
//   const cityEl = document.querySelector('.city_2');
//   // console.log(pos);

//   fetch(url).then((respond) => respond.json()).then((data) => {
//       console.log(data);
//       tempEl.innerText = data.main.temp;
//       cityEl.innerText = data.name;
//   })

// }

// navigator.geolocation.getCurrentPosition(weatherLA);

// const weatherIntela = (pos) => {
//   const API_KEY = "2ad06a4f944e2127313de92dc83a1b0f";
//   const lat = pos.coords.latitude;
//   const lon = pos.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
//   const tempEl = document.querySelector('.temp_3 span');
//   const cityEl = document.querySelector('.city_3'); 

//   fetch(url).then((respond) => respond.json()).then((data) => {
//       console.log(data);
//       tempEl.innerText = data.main.temp;
//       cityEl.innerText = data.name;
//   })

// }

// navigator.geolocation.getCurrentPosition(weatherIntela);

const weatherLA = () => {
  const lat = 34.0549076;
  const lon = -118.242643;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`

  const temp2El = document.querySelector('.temp_2');
  const city2El = document.querySelector('.city_2');

  fetch(url).then((respond) => respond.json()).then((data) => {
    temp2El.innerText = data.main.temp;
    console.log(temp2El);
    city2El.innerText = data.name;
  });

};

weatherLA();

const weatherIntelaken = () => {
  const lat = 46.6863481;
  const lon = 7.863204899999999;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`

  const temp3El = document.querySelector('.temp_3');
  const city3El = document.querySelector('.city_3');

  fetch(url).then((respond) => respond.json()).then((data) => {
    temp3El.innerText = data.main.temp;
    city3El.innerText = data.name;
  });

};

weatherIntelaken();