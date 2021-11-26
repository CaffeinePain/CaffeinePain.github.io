const images = [
    {num:0, src:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLNb9?ver=6f2d"},
    {num:1, src:"https://1.gall-gif.com/tdgall/files/attach/images/82/761/224/073/c5eaa99107e7c2c4a629dc3784ef7714.gif"},
    {num:2, src:"https://1.gall-gif.com/tdgall/files/attach/images/82/761/224/073/314bd3ec5039c8f14b8392c8600a8384.gif"},
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage.src}`;

document.body.appendChild(bgImage);
bgImage.id = "background_image";