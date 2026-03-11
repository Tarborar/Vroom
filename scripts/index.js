/*
Section qui change en fonction du device :
    -Home
    -Explanation
    -Point
    -Mobile
    -Mag faisable avec des display none mais il faut quand même générer un bouton en js
    -Newsletter on vire le position absolute
*/

import {desktopHTML} from './desktop.js';
import {tabletHTML} from './tablet.js';
import {mobileHTML} from './mobile.js';

let device; //média pour changeHTML()
let currentDevice = null; //Permet d'éviter d'actualiser tout le innerHTML à chaque changement de innerWidth

//Génère les reviews
async function loadReviews(){
    const response = await fetch ('./datas/reviews.json');
    const data = await response.json();

    const review = document.querySelector("#review");
    review.innerHTML = data.reviews.map(r => `
        <div class="vertical review__card smallGap">
            <div class="horizontal smallGap">
                <div class="review__avatarContainer">
                    <img src="${r.avatar}" class="review__avatar" alt="">
                </div>
                <div class="vertical review__avatarInfo">
                    <p class="review__name">${r.name}</p>
                    <div class="review__star">${r.rating}</div>
                </div>
            </div>
            <p class="paragraph review__comment">${r.comment}</p>
        </div>
    `);
}

//Définit quel est le device
function getCurrentDevice(){
    const width = window.innerWidth;

    if(width > 1024){
        device = "desktop";
    }

    if(width <= 1024){
        device = "tablet";
    }

    if(width < 768){
        device = "mobile";
    }
}

//Change la structure HTML en fonction du device
function changeHTML(screenDevice){
    if(currentDevice !== screenDevice){
        currentDevice = device;

        const main = document.querySelector("#main");

        switch(screenDevice){
            case "desktop":
                console.log("Screen PC");
                main.innerHTML = desktopHTML;
                break;
            case "tablet":
                console.log("Screen tablette");
                main.innerHTML = tabletHTML;
                break;
            case "mobile":
                console.log("Screen mobile");
                main.innerHTML = mobileHTML;
                break;
        }
    } 
}

//Change la hauteur des backgrounds par rapport à l'overlap
function changeBackgroundHigh(){
    const bannerContainer = document.querySelector("#bannerContainer");
    const bannerBackground = document.querySelector(".bannerBackground");
    const videoContainer = document.querySelector("#videoContainer");
    const videoBackground = document.querySelector(".video__background");

    if(bannerContainer && bannerBackground){
        const bannerContainerHeight = bannerContainer.offsetHeight;
        bannerBackground.style.height = `${bannerContainerHeight}px`;
    }

    if(videoContainer && videoBackground){
        const videoContainerHeight = videoContainer.offsetHeight;
        videoBackground.style.height = `${videoContainerHeight}px`;
    }
}

//Appelle les fonctions pour changer le HTML en fonction du device
getCurrentDevice();
changeHTML(device);
changeBackgroundHigh();

//Appelle les fonctions à chaque redimension de fenêtre
addEventListener("resize", () => {
    getCurrentDevice();
    changeHTML(device);
    changeBackgroundHigh();
})

loadReviews();