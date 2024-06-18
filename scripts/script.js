const container = document.getElementById('particle-container');
const particleCount = 32;
const imageUrl = 'https://blooshy.nekoweb.org/images/particle.png'; // Replace with your image URL

for (let i = 0; i < particleCount; i++) {
    createParticle(i);
}

function createParticle(index) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    particle.style.backgroundImage = `url('${imageUrl}')`;

    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const duration = Math.random() * 5 + 2;
    particle.style.animationDuration = `${duration}s`;

    const angle = Math.random() * 2 * Math.PI; // Angle in radians
    const distance = Math.random() * 500 + 200; // Random distance for particles to travel

    const endX = Math.cos(angle) * distance;
    const endY = Math.sin(angle) * distance;

    const keyframes = `
        @keyframes move-${index} {
            0% {
                opacity: 0;
                transform: translate(0, 0);
            }
            15% {
                opacity: 1;
            }
            100% {
                opacity: 0;
                transform: translate(${endX}px, ${endY}px);
            }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    particle.style.animationName = `move-${index}`;

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
        createParticle(index);
    }, duration * 1000);
}