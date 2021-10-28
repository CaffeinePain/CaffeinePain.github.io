const API_KEY = "52be1478b78382d7e99bab7d2d81eca7";
const USER_LAT_KEY = "user_lat";
const USER_LON_KEY = "user_lon";

function onGeoOk(position) {
    getUserGeo(position);
    displayWeather(localStorage.getItem(USER_LAT_KEY),localStorage.getItem(USER_LON_KEY));
}

function getUserGeo(position) {
    const lat = position.coords.latitude;
    localStorage.setItem(USER_LAT_KEY, lat);
    const lon = position.coords.longitude;
    localStorage.setItem(USER_LON_KEY, lon);
}

function displayWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            const weather = document.querySelector("#weather span:first-child");
            const temp = Math.round((data.main.temp) - 273.15);
            weather.innerText = `${data.weather[0].main} / ${temp}°C`;
    });
}
function onGeoError() {
    alert("날씨 api가 당신의 위치를 찾을 수 없습니다. 혹시 gps가 꺼져있다면 켠 후 새로고침 해주세요.");
}

const userPosition = [localStorage.getItem(USER_LAT_KEY), localStorage.getItem(USER_LON_KEY)];

if(userPosition[0] === null || userPosition[1] === null) {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {
    displayWeather(userPosition[0],userPosition[1]);
}