for (let i = 0; i < 50; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 20}s`;
    bubble.style.animationDuration = `${10 + Math.random() * 30}s`;
    bubble.style.width = `${10 + Math.random() * 20}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);
}

// JavaScript to handle the timeline slider if needed
const slider = document.getElementById('timeline-slider');
slider.addEventListener('input', (e) => {
    console.log(`Selected year: ${e.target.value}`);
});
