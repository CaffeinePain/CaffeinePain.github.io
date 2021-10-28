const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const today = String(date.getDate());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${year}/${month}/${today} ${hours}:${minutes}:${seconds}`;
}

getClock(); 
setInterval(getClock, 1000);