const bluetoothBtn = document.getElementById("bluetooth");
const audioBtn = document.getElementById("audio");
const audio1 = new Audio("칼리 모닝콜.mp3");

function bluetoothConnect() {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true, })
    .then(device => {
      // Human-readable name of the device.
      console.log(device.name);
  
      // Attempts to connect to remote GATT Server.
      return device.gatt.connect();
    })
    .then(server => { playAudio(); })
    .catch(error => { console.log(error); });
}

function playAudio() {
    audio1.play();
}

bluetooth.addEventListener("click", bluetoothConnect);

audioBtn.addEventListener("click", playAudio);