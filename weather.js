function onGeoIsOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live at ", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
}

function onGeoIsError(){
    console.log("Can't find your Location!");
}


navigator.geolocation.getCurrentPosition(onGeoIsOk, onGeoIsError);

const API_KEY = "3d75818a89cb7b46274d80a7651263a7";

