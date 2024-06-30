// Elements de la liste
let voisins = document.querySelector('#voisins-list');
let garage = document.querySelector('#garage-list');
let mb = document.querySelector('#mb-list');
let sellerie = document.querySelector('#sellerie-list');



voisins.addEventListener('click', () => changeProject(voisins));
garage.addEventListener('click', () => changeProject(garage));
mb.addEventListener('click', () => changeProject(mb));
sellerie.addEventListener('click', () => changeProject(sellerie));

function changeProject(clicked) {
    let projectImg = document.querySelector('.project-img');
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');

    // Ajout d'une classe active pour les transitions d'opacité
    projectName.classList.remove('active');
    projectDescription.classList.remove('active');

    setTimeout(() => {
        if (clicked === voisins) {
            projectImg.style.backgroundImage = 'url(images/voisins.webp)';
            projectName.innerHTML = 'HELLO VOISINS';
            projectDescription.innerHTML = 'Les voisins la';
        } else if (clicked === garage) {
            projectImg.style.backgroundImage = 'url(images/gar.webp)';
            projectName.innerHTML = 'GARAGE V. PARROT';
            projectDescription.innerHTML = 'le garage la';
        } else if (clicked === mb) {
            projectImg.style.backgroundImage = 'url(images/mb.webp)';
            projectName.innerHTML = 'MINUTE BEAUTE';
            projectDescription.innerHTML = 'Ma soeur la';
        } else if (clicked === sellerie) {
            projectImg.style.backgroundImage = 'url(images/coming.webp)';
            projectName.innerHTML = 'EM SELLERIE';
            projectDescription.innerHTML = 'Les clients la';
        }

        // Ajout d'un délai pour permettre à l'image de se charger avant d'afficher le texte
        setTimeout(() => {
            projectName.classList.add('active');
            projectDescription.classList.add('active');
        }, 100);
    }, 500); // Délai pour permettre la transition d'opacité
}



// Bulles
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