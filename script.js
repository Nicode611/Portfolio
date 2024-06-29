 for (let i = 0; i < 10; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 120}%`;
    bubble.style.animationDelay = `${Math.random() * 30}s`;
    bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
    bubble.style.width = `${10 + Math.random() * 20}px`;
    bubble.style.height = bubble.style.width;
    document.body.appendChild(bubble);

    // Cloner la bulle pour qu'elle apparaisse immédiatement
    const initialBubble = bubble.cloneNode(true);
    initialBubble.style.animationDelay = '0s'; 
    document.body.appendChild(initialBubble);
}
