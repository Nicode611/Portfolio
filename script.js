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
            projectDescription.innerHTML = 'Hello Voisins est le projet de mon examen final de formation.<br><br>Ce projet a représenté un grand défi technique, me permettant de passer par toutes les phases de création d’un projet.<br>L’objectif principal de Hello Voisins est de permettre aux utilisateurs de communiquer entre eux via leur localisation.<br><br>Ce projet est encore en phase de conception, et je prévois de le développer davantage en créant une API REST ainsi qu’une application mobile. Une refonte graphique est également prévue afin d’améliorer l’interface utilisateur et l’expérience globale.';
            projectBtn.href = "https://hello-voisins.com";
            closeMenu();
        } else if (clicked === garage) {
            projectImg.style.backgroundImage = 'url(images/gar.webp)';
            projectName.innerHTML = 'GARAGE V. PARROT';
            projectDescription.innerHTML = 'Ce projet a été réalisé dans le cadre de ma formation et constitue mon projet d’examen en cours de formation.<br><br> L’objectif de cet examen était de créer un site web pour M. V. Parrot, garagiste à Toulouse. Le site permet à M. Parrot de mettre en exposition ses véhicules d’occasion, d’ajouter les services proposés par son garage, ainsi que de gérer diverses autres fonctionnalités via un panneau de contrôle. <br>Les employés du garage disposent également d’un accès à un panneau de contrôle, mais avec des fonctionnalités restreintes adaptées à leurs besoins. <br><br>Voici les identifiants de connexion pour les différents types de comptes :<br> ADMIN : -valentin.parrot@gmail.com -admin12!<br> EMPLOYÉ : -employe@gmail.com -employe12!';
            projectBtn.href = "http://157.230.143.168/";
            closeMenu();
        } else if (clicked === mb) {
            projectImg.style.backgroundImage = 'url(images/mb.webp)';
            projectName.innerHTML = 'MINUTE BEAUTE';
            projectDescription.innerHTML = 'Ce projet a été réalisé dans le cadre d’une mission en freelance.<br><br>Wendy, une coiffeuse récemment établie à son compte, avait besoin d’un site vitrine pour promouvoir son activité.<br><br>Ce projet m’a permis de travailler intensivement sur le design afin de mettre en valeur son activité. J’ai également dû gérer plusieurs aspects techniques tels que l’hébergement, le CMS, les frameworks, le référencement, la sécurité, etc.<br><br>Étant donné qu’il s’agissait d’une mission professionnelle, j’ai dû être extrêmement vigilant sur tous ces points pour garantir un résultat optimal et répondre aux attentes de ma cliente.';
            projectBtn.href = "https://minutebeaute.fr/";
            closeMenu();
        } else if (clicked === sellerie) {
            projectImg.style.backgroundImage = 'url(images/emsellerie.webp)';
            projectName.innerHTML = 'EM SELLERIE';
            projectDescription.innerHTML = 'Ce projet a été réalisé dans le cadre d’une mission en freelance.<br><br>Marc et Emma, de la société EM Sellerie, souhaitaient un site web pour promouvoir leur activité et présenter leurs réalisations. Étant donné la nature très artisanale et presque artistique de leur domaine, la sellerie, ils voulaient un site qui reflète fidèlement leur univers. Nous avons donc travaillé ensemble sur le design pour qu’il corresponde parfaitement à leur vision.<br><br>La personnalisation du site a été un défi technique majeur. J’ai dû m’adapter et modifier mes méthodes de travail pour répondre aux besoins spécifiques de mes clients.<br>La sécurité a également représenté un défi important, car le site faisait face à de nombreuses attaques. Cela m’a permis de renforcer mes compétences en matière de sécurité web.';
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

