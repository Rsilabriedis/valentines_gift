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

const flowerElements = []; // Track the actual DOM elements

window.addEventListener('mousemove', function(e) {
    document.getElementById('x-value').textContent = e.x;
    document.getElementById('y-value').textContent = e.y;
});

document.getElementById('clickarea').addEventListener('click', function(e) {
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    
    const flowerImg = document.createElement('img');
    flowerImg.src = randomFlower;
    flowerImg.classList.add('flower');
    
    flowerImg.style.left = e.x + 'px';
    flowerImg.style.top = e.y + 'px';
    
    document.body.appendChild(flowerImg);
    flowerElements.push(flowerImg); // Add to tracking array
    
    // Remove after 10 seconds
    setTimeout(() => {
        flowerImg.classList.add('fade-out');
        
        // Remove from DOM after fade animation
        setTimeout(() => {
            flowerImg.remove();
            // Remove from array
            const index = flowerElements.indexOf(flowerImg);
            if (index > -1) flowerElements.splice(index, 1);
        }, 500); // Wait for fade-out animation
    }, 10000); // 10 seconds
});