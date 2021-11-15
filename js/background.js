const images = [
    {num:0, src:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLNb9?ver=6f2d"},
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage.src}`;

document.body.appendChild(bgImage);
bgImage.id = "background_image";