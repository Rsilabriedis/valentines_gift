// Array of your flower image paths
const flowers = [
    'flowers_png/CosmoOUTLINED.png',
    'flowers_png/DaffodilOUTLINED.png',
    'flowers_png/DaisyOUTLINED.png',
    'flowers_png/LavenderOUTLINED.png',
    'flowers_png/LilyOfTheValleyOUTLINED.png',
    'flowers_png/LilyOUTLINED.png',
    'flowers_png/OrchidOUTLINED.png',
    'flowers_png/PansyOUTLINED.png',
    'flowers_png/PoppyOUTLINED.png',
    'flowers_png/RoseOUTLINED.png',
    'flowers_png/SunflowerOUTLINED.png',
    'flowers_png/TulipOUTLINED.png'
];

const flowerElements = [];

function updateFlowerCount() {
    document.getElementById('flower-count').textContent = flowerElements.length;
}

document.getElementById('clickarea').addEventListener('click', function(e) {
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    
    const flowerImg = document.createElement('img');
    flowerImg.src = randomFlower;
    flowerImg.classList.add('flower');
    
    flowerImg.style.left = e.x + 'px';
    flowerImg.style.top = e.y + 'px';
    
    document.body.appendChild(flowerImg);
    flowerElements.push(flowerImg);
    updateFlowerCount();
    
    setTimeout(() => {
        flowerImg.classList.add('fade-out');
        
        setTimeout(() => {
            flowerImg.remove();
            const index = flowerElements.indexOf(flowerImg);
            if (index > -1) flowerElements.splice(index, 1);
            updateFlowerCount();
        }, 500);
    }, 10000);
});

var check = document.getElementById("check");
var audio = new Audio('/Caramel.mp3'); // Changed to match your new filename with leading slash

check.addEventListener('change', function() {
    if(this.checked) {
        audio.play().catch(e => console.error('Play failed:', e));
    } else {
        audio.pause();
    }
});