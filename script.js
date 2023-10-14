// console.log("weater now start");

// async function featchWeatherDetail() {
//     // let latitude = 15.3333;
//     // let longitude = 74.0813;
//     try {
//         let city = "hathras";
//         const API_key = "15421ba0d302fb53418e110f5b516d1c";
//         const reeponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);

//         const data = await reeponse.json();
//         console.log("Weather data: -> ", data);
//         // console.log(JSON.stringify(`${data?.main?.temp.toFixed(2)} K`));

//         let newPara = document.createElement('p');
//         newPara.textContent = `${data?.main?.temp.toFixed(2)} K`

//         document.body.appendChild(newPara);
//     } catch (err) {
//         console.log(err);
//     }

// }

// async function getCustomWeatherDetails() {
//     try  {
//         let lat = 15.89;
//         let lon = 74.54;
//         const API_key = "15421ba0d302fb53418e110f5b516d1c";


//         let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)

//         let data = await result.json();
//         let temp = `${data?.main?.temp.toFixed(2)} K`
//         console.log(temp);
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// function geoLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         console.log("No geolocation");
//     }
// }

// function showPosition(position){
//     let lat = position.coords.latitude;
//     let lon = position.coords.longitude;
//     let acc = position.coords.accuracy;

//     console.log(acc);
//     console.log(lat);
//     console.log(lon);
// }



console.log("Hello");
const API_KEY = "168771779c71f3d64106d8a88376808a";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let city = "mandsaur";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("Weather -> ", data);

    renderWeatherInfo(data);
  } catch (err) {
    console.warn(err);
  }
}

async function getCustomWeather() {
  try {
    let latitude = 24.0667;
    let longitude = 75.0667;

    let result =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
      `);

    let data = await result.json();
    console.log("Weather -> ", data);
    renderWeatherInfo(data);
  } catch (err) {
    console.log(err);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No geolocation Support available");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let longi = position.coords.longitude;

  console.log(lat);
  console.log(longi);
}
