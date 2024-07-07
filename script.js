// Menu hamburger

const menuBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
});

function closeMenu() {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('active');
    console.log('hello');
}

overlay.addEventListener('click', function closeMenu() {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('active');
});



// Elements de la liste
let voisins = document.querySelector('#voisins-list');
let garage = document.querySelector('#garage-list');
let mb = document.querySelector('#mb-list');
let sellerie = document.querySelector('#sellerie-list');
let mobileVoisins = document.querySelector('#menu-voisins');
let mobileGarage = document.querySelector('#menu-garage');
let mobileMb = document.querySelector('#menu-beaute');
let mobileSellerie = document.querySelector('#menu-sellerie');

document.addEventListener("DOMContentLoaded", function() {
    voisins.click();
});

voisins.addEventListener('click', () => changeProject(voisins));
garage.addEventListener('click', () => changeProject(garage));
mb.addEventListener('click', () => changeProject(mb));
sellerie.addEventListener('click', () => changeProject(sellerie));
mobileVoisins.addEventListener('click', () => changeProject(voisins))
mobileGarage.addEventListener('click', () => changeProject(garage))
mobileMb.addEventListener('click', () => changeProject(mb))
mobileSellerie.addEventListener('click', () => changeProject(sellerie))


function changeProject(clicked) {
    let projectImg = document.querySelector('.project-img');
    let projectName = document.querySelector('.project-name');
    let projectDescription = document.querySelector('.project-description');
    let projectBtn = document.querySelector('.see-project-btn');

    // Ajout d'une classe active pour les transitions d'opacité
    projectName.classList.remove('active');
    projectDescription.classList.remove('active');
    projectBtn.classList.remove('active');

    setTimeout(() => {
        if (clicked === voisins) {
            projectImg.style.backgroundImage = 'url(images/voisins.webp)';
            projectName.innerHTML = 'HELLO VOISINS';
            projectDescription.innerHTML = 'Hello-Voisins est une application web conçue pour faciliter la communication entre voisins.<br> L\'application permet aux utilisateurs de discuter avec leurs voisins en utilisant la localisation des utilisateurs.<br>Elle permet aussi la création de groupes de discussion pour des immeubles,résidences, ou pour tout autre cas d’usages, et inclus également la possibilité de voir tous les utilisateurs à proximité sur une carte, tout en respectant la confidentialité des utilisateurs qui peuvent choisir de ne pas apparaître.';
            projectBtn.href = "https://hello-voisins.com";
            closeMenu();
        } else if (clicked === garage) {
            projectImg.style.backgroundImage = 'url(images/gar.webp)';
            projectName.innerHTML = 'GARAGE V. PARROT';
            projectDescription.innerHTML = 'le garage la';
            projectBtn.href = "http://157.230.143.168/";
            closeMenu();
        } else if (clicked === mb) {
            projectImg.style.backgroundImage = 'url(images/mb.webp)';
            projectName.innerHTML = 'MINUTE BEAUTE';
            projectDescription.innerHTML = 'Ma soeur la';
            projectBtn.href = "https://minutebeaute.fr/";
            closeMenu();
        } else if (clicked === sellerie) {
            projectImg.style.backgroundImage = 'url(images/test.png)';
            projectName.innerHTML = 'EM SELLERIE';
            projectDescription.innerHTML = 'Les clients la';
            projectBtn.href = "https://em-sellerie.fr/";
            closeMenu();
        }

        // Ajout d'un délai pour permettre à l'image de se charger avant d'afficher le texte
        setTimeout(() => {
            projectName.classList.add('active');
            projectDescription.classList.add('active');
            projectBtn.classList.add('active');
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

