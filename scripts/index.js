import {
    homeHTML,
    homeAdaptiveHTML, 
    explanationHTML,
    explanationAdaptiveHTML, 
    pointHTML,
    pointAdaptiveHTML, 
    mobileHTML,
    mobileAdaptiveHTML, 
    magHTML,
    magAdaptiveHTML, 
    magAdaptiveMobileHTML,
    newsletterHTML,
    newsletterAdaptiveHTML,
    newsletterAdaptiveMobileHTML
} from './adaptive.js';

let device; //média pour changeHTML()
let currentDevice = null; //Permet d'éviter d'actualiser tout le innerHTML à chaque changement de innerWidth
let currentReview = 0; //Changera pour charger le bloc de review

let allReviews; //récupèrera les reviews
let splitReview = [];

//Charge les reviews
async function loadReviews(){
    const response = await fetch ('./datas/reviews.json');
    const data = await response.json();

    allReviews = data.reviews;

    splitReviews(allReviews);
    displayReviews();
}

//Range toutes les reviews 3 par 3 dans un nouveau tableau
function splitReviews(reviews){
    const maxReview = 3; 
    
    for (let i=0; i<reviews.length; i+=maxReview) {
        splitReview.push(reviews.slice(i,i+maxReview));
    }
}

//Range les reviews par 3 dans un autre tableau
function displayReviews(){

    function generateStars(rating) {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '<i class="fa-solid fa-star"></i>';
        }
        return stars;
    }
    
    const reviewContainer = document.querySelector("#reviewContainer");

    //charge les 3 reviews du currentReview
    reviewContainer.innerHTML = splitReview[currentReview].map(r => `
        <div class="vertical review__card smallGap">
            <div class="horizontal smallGap">
                <div class="review__avatarContainer">
                    <img src="${r.avatar}" class="review__avatar" alt="">
                </div>
                <div class="vertical review__avatarInfo">
                    <p class="review__name">${r.name}</p>
                    <ul class="review__starContainer">
                        ${generateStars(r.rating)}
                    </ul>
                </div>
            </div>
            <p class="paragraph review__comment">${r.comment}</p>
        </div>
    `).join(''); //Supprime les "," 
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
        const home = document.querySelector("#home");
        const explanation = document.querySelector("#explanation");
        const point = document.querySelector("#point");
        const mobile = document.querySelector("#mobile");
        const mag = document.querySelector("#mag");
        const newsletter = document.querySelector("#newsletter");

        switch(screenDevice){
            case "desktop":
                console.log("Screen PC");
                home.innerHTML = homeHTML;
                explanation.innerHTML = explanationHTML;
                point.innerHTML = pointHTML;
                mobile.innerHTML = mobileHTML;
                mag.innerHTML = magHTML;
                newsletter.innerHTML = newsletterHTML;
                break;

            case "tablet":
                console.log("Screen tablette");
                home.innerHTML = homeAdaptiveHTML;
                explanation.innerHTML = explanationAdaptiveHTML;
                point.innerHTML = pointAdaptiveHTML;
                mobile.innerHTML = mobileAdaptiveHTML;
                mag.innerHTML = magAdaptiveHTML;
                newsletter.innerHTML = newsletterAdaptiveHTML;
                break;

            case "mobile":
                console.log("Screen mobile");
                home.innerHTML = homeAdaptiveHTML;
                explanation.innerHTML = explanationAdaptiveHTML;
                point.innerHTML = pointAdaptiveHTML;
                mobile.innerHTML = mobileAdaptiveHTML;
                mag.innerHTML = magAdaptiveMobileHTML;
                newsletter.innerHTML = newsletterAdaptiveMobileHTML;
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

//Rattache les éléments lorsqu'ils sont changés dans changeHTML sinon ça ne fonctionne pas
function initializeDomElement(){
    const reviewLeft = document.querySelector("#reviewLeft");
    const reviewRight = document.querySelector("#reviewRight");
    const reviewCount = document.querySelector(".review__count");
    const reviewContainer = document.querySelector("#reviewContainer");
    const faqsElementContainer = document.querySelectorAll(".faq__elementContainer");

    //Met à jour l'affichage du splitReview[currentReview]
    reviewLeft.addEventListener("click", () =>{
        reviewContainer.classList.add('slide-right');

        if(currentReview === 0){
            currentReview = splitReview.length - 1;
        }else{
            currentReview --;
        }

        reviewCount.innerText = `${currentReview + 1}/4`
        displayReviews();

        setTimeout(() => {
            reviewContainer.classList.remove('slide-right');
        }, 500);
    });

    reviewRight.addEventListener("click", () =>{
        reviewContainer.classList.add('slide-left');

        if(currentReview === splitReview.length - 1){
            currentReview = 0
        } else{
            currentReview ++;
        }
        
        reviewCount.innerText = `${currentReview + 1}/4`
        displayReviews();

        setTimeout(() => {
            reviewContainer.classList.remove('slide-left');
        }, 500);
    });

    faqsElementContainer.forEach(faqElementContainer =>{
        faqElementContainer.addEventListener("click", (e) =>{
            //toggle la classe .active
            e.currentTarget.classList.toggle('active');
        })
    });
}

//Appelle les fonctions pour changer le HTML en fonction du device
getCurrentDevice();
changeHTML(device);
changeBackgroundHigh();
loadReviews();
initializeDomElement();

//Appelle les fonctions à chaque redimension de fenêtre
addEventListener("resize", () => {
    getCurrentDevice();
    changeHTML(device);
    changeBackgroundHigh();
    loadReviews();
    initializeDomElement();
});



