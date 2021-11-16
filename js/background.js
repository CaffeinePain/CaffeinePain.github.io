const images = [
    {num:0, src:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLNb9?ver=6f2d"},
    {num:1, src:"https://pixabay.com/get/g3c6725f9f808f9d79cf248df7b07311da57d8323f8097c0c1f5d16ee881e5e0634f5b7426ca3c555fb04ca6ba2883265832507a6557c11643eb4e5cbebab9c511986dc61596daf4bd37d758d25e53ef9_1920.jpg"},
    {num:2, src:"https://pixabay.com/get/gc2f5679b70fed07f7481963a22d171b840bf682e3de28f863f5d8cf6daa66ee7b4b6e480a71142b226b22eb565ff2c8d89b07686e2b0e7cbd6fa15769b39bac95a64b30e0df1acd3f266777f73228860_1920.jpg"},
    {num:3, src:"https://pixabay.com/get/g10bd1d853e9e9d22f6d2311ee6892b55aa3e958e77376017692518142612975371dec61d36d832b038d07a38b5fa24a7641ae399d30978481c3e852c0e48da23cd5d525328b000a2dff0120960de428a_1920.jpg"},
    {num:4, src:"https://pixabay.com/get/gd4e4e0eaf648f95c2d953455025da9c0bd7aadc3ecf5805fa17b1563fa723c7a8cd055d3b72ad56c44342f26459db11aca4aa8640e5ccf296a8e2fbee8a803cc2999add0aad8ec70f6c9fa7c29461bc7_1920.jpg"},
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage.src}`;

document.body.appendChild(bgImage);
bgImage.id = "background_image";