export const homeHTML =`
    <div class="homeContainer sectionContainer vertical">
        <header class="horizontal header">
            <div>
                <img src="./assets/Logo.png" class="header__logo" alt="Logo Vroom">
            </div>
            <nav>
                <ul id="header__navigation" class="horizontal header__navigation">
                    <li><a href="#home">Accueil</a></li>
                    <li><a href="#explanation">Avantages</a></li>
                    <li><a href="#mobile">Application</a></li>
                    <li><a href="#mag">Mag'</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
            <button class="button">Connexion</button>
        </header>
        <div class="home__elements">
            <div class="vertical home__info">
                <h1 class="h1__title">Covoiturez <strong>simplement</strong> partout en France</h1>
                <p class="paragraph">Découvrez Vroom, la nouvelle façon de voyager malin. Que ce soit pour un trajet quotidien ou de longues distances, trouvez rapidement un conducteur ou des passager partageant votre destination</p>
                <div class="inputContainer">
                    <input type="text" class="inputText" placeholder="Où souhaitez-vous aller ?">
                    <button class="button__inputText">
                        <i class="fa-solid fa-magnifying-glass center"></i>
                    </button>
                </div>
                <div class="horizontal smallGap home__buttonInfoContainer">
                    <button class="button">Créer un vroom</button>
                    <button class="home__buttonPlay">
                        <i class="fa-solid fa-play center"></i>
                    </button>
                </div>
            </div>
            <div>
                <img src="./assets/Voiture.png" class="home__image" alt="Voiture">
            </div>
        </div>
    </div>
`;

export const homeAdaptiveHTML =`
    <div id="homeContainer" class="homeContainer sectionContainer vertical">
        <header class="horizontal header">
            <div>
                <img src="./assets/Logo.png" class="header__logo" alt="Logo Vroom">
            </div>
            <i class="fa-solid fa-bars"></i>
        </header>
        <div class="home__elements">
            <div class="vertical home__info">
                <h1 class="h1__title">Covoiturez <strong>simplement</strong> partout en France</h1>
                <p class="paragraph">Découvrez Vroom, la nouvelle façon de voyager malin. Que ce soit pour un trajet quotidien ou de longues distances, trouvez rapidement un conducteur ou des passager partageant votre destination</p>
                <div class="inputContainer">
                    <input type="text" class="inputText" placeholder="Où souhaitez-vous aller ?">
                    <button class="button__inputText">
                        <i class="fa-solid fa-magnifying-glass center"></i>
                    </button>
                </div>
                <div>
                <img src="./assets/Voiture.png" class="home__image" alt="Voiture">
            </div>
            </div>
            <div class="horizontal smallGap home__buttonInfoContainer">
                <button class="button">Créer un vroom</button>
                <button class="home__buttonPlay">
                    <i class="fa-solid fa-play center"></i>
                </button>
            </div>
        </div>
    </div>
`;

export const explanationHTML =`
    <div class="explanationContainer sectionContainer horizontal gap">
        <div class="explanation__covoiturage">
            <div class="explanation__imageContainer">
                <img src="./assets/Covoiturage.png"  class="explanation__image" alt="Rencontre covoiturage">
                <div class="explanation__trustContainer vertical">
                    <p class="explanation__trustNumber">5k</p>
                    <p class="explanation__trustParagraph">voyageurs heureux</p>
                </div>
            </div>
        </div>
        <div class="vertical gap">
            <h2 class="h2__title">Vroom <strong>simplifie</strong> vos déplacements quotidiens</h2>
            <div class="vertical gap">
                <div class="horizontal smallGap explanation__infoContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-user explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Trouvez votre conducteur</h3>
                        <p class="paragraph">Recherchez parmi des milliers de trajets disponibles chaque jour en France</p>
                    </div>
                </div>
                <div class="horizontal smallGap explanation__infoContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-arrow-pointer explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Réservez en 1 clic</h3>
                        <p class="paragraph">Paiement sécurisé et confirmation immédiate pour voyager l'esprit tranquille</p>
                    </div>
                </div>
                <div class="horizontal smallGap explanation__infoContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-award explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Gagnez des points</h3>
                        <p class="paragraph">Chaque kilomètre parcouru vous rapporte des points à échanger contre des récompenses exclusives</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export const explanationAdaptiveHTML =`
    <div id="explanationContainer" class="explanationContainer sectionContainer horizontal gap">
        <div class="vertical gap">
            <h2 class="h2__title">Vroom <strong>simplifie</strong> vos déplacements quotidiens</h2>
            <div class="explanation__covoiturage">
                <div class="explanation__imageContainer">
                    <img src="./assets/Covoiturage.png"  class="explanation__image" alt="Rencontre covoiturage">
                    <div class="explanation__trustContainer vertical">
                        <p class="explanation__trustNumber">5k</p>
                        <p class="explanation__trustParagraph">voyageurs heureux</p>
                    </div>
                </div>
            </div>
            <div class="vertical gap explanation__infoContainer">
                <div class="horizontal smallGap explanation__elementContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-user explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Trouvez votre conducteur</h3>
                        <p class="paragraph">Recherchez parmi des milliers de trajets disponibles chaque jour en France</p>
                    </div>
                </div>
                <div class="horizontal smallGap explanation__elementContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-arrow-pointer explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Réservez en 1 clic</h3>
                        <p class="paragraph">Paiement sécurisé et confirmation immédiate pour voyager l'esprit tranquille</p>
                    </div>
                </div>
                <div class="horizontal smallGap explanation__elementContainer">
                    <div class="explanation__iconContainer">
                        <img src="./assets/icon_background.png" alt="">
                        <i class="fa-solid fa-award explanation__icon center"></i>
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Gagnez des points</h3>
                        <p class="paragraph">Chaque kilomètre parcouru vous rapporte des points à échanger contre des récompenses exclusives</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export const pointHTML=`
    <div class="sectionContainer">
        <div class="pointContainer horizontal gap">
            <div class="vertical gap point__infoContainer">
                <h2 class="h2__title point__title">Cumulez des points et profitez d'avantages exclusifs</h2>
                <p class="point__paragraph">Chaque kilomètre parcouru vous rapporte des points fidélité à échanger contre des réductions ou des services</p>
                <div class="inputContainer">
                    <input type="text" class="inputText" placeholder="Saisissez votre code promo">
                    <button class="button__inputText point__buttonInputText">
                        <i class="fa-solid fa-magnifying-glass center"></i>
                    </button>
                </div>
            </div>
            <div class="point__imageContainer center">
                <img src="./assets/Points.png" class="point__image" alt="Carte Point">
            </div>
        </div>
    </div>
`

export const pointAdaptiveHTML =`
    <div class="sectionContainer">
        <div class="pointContainer horizontal gap">
            <div class="vertical gap point__infoContainer">
                <h2 class="h2__title point__title">Cumulez des points et profitez d'avantages exclusifs</h2>
                <p class="point__paragraph">Chaque kilomètre parcouru vous rapporte des points fidélité à échanger contre des réductions ou des services</p>
                <div class="point__imageContainer center">
                    <img src="./assets/Points.png" class="point__image" alt="Carte Point">
                </div>
            </div>
            <div class="inputContainer">
                <input type="text" class="inputText" placeholder="Saisissez votre code promo">
                <button class="button__inputText point__buttonInputText">
                    <i class="fa-solid fa-magnifying-glass center"></i>
                </button>
            </div>
        </div>
    </div>
`;

export const mobileHTML=`
    <div class="mobileContainer sectionContainer horizontal gap">
        <div class="vertical gap mobile__infoContainer">
            <h2 class="h2__title">L'expérience Vroom <strong>mobile</strong></h2>
            <button class="mobile__infoButton">Ouvrir l'application</button>
            <div class="horizontal smallGap">
                <div>
                    <img src="./assets/Logo_mobile.png" class="logoApplication" alt="">
                </div>
                <div class="vertical paragraphGap">
                    <h3 class="h3__title">Simplifiez votre quotidien</h3>
                    <p class="paragraph">Réservez, gérez et payez vos trajets directement depuis votre mobile</p>
                </div>
            </div>
        </div>
        <div class="smallGap mobile__cardContainer">
            <div class="vertical mobile__card smallGap">
                <h4 class="h4__title mobile__cardTitle">Pour IOS</h4>
                <p class="paragraph">Téléchargez Vroom sur l'App Store et commencez à voyager</p>
                <button class="button">Téléchargez</button>
                <div class="horizontal mobile__logo">
                    <img src="./assets/QRcode.png" alt="QRCode">
                    <div class="mobile__logoContainer">
                        <img src="./assets/Ios.png" class="mobile__logoImage" alt="Logo IOS">
                    </div>
                </div>
            </div>
            <div class="vertical mobile__card smallGap">
                <h4 class="h4__title mobile__cardTitle">Pour Android</h4>
                <p class="paragraph">Disponible sur Google Play, installez l'application Vroom</p>
                <button class="button">Téléchargez</button>
                <div class="horizontal mobile__logo">
                    <img src="./assets/QRcode.png" alt="QRCode">
                    <div class="mobile__logoContainer">
                        <img src="./assets/Android.png" class="mobile__logoImage" alt="Logo Android">
                    </div>
                </div>
            </div>
        </div>
    </div>
`

export const mobileAdaptiveHTML =`
    <div class="mobileContainer sectionContainer vertical gap">
        <div class="vertical gap mobile__infoContainer">
            <h2 class="h2__title">L'expérience Vroom <strong>mobile</strong></h2>
                <div class="smallGap mobile__cardContainer">
                    <div class="vertical mobile__card smallGap">
                        <h4 class="h4__title mobile__cardTitle">Pour IOS</h4>
                        <p class="paragraph">Téléchargez Vroom sur l'App Store et commencez à voyager</p>
                        <button class="button">Téléchargez</button>
                        <div class="horizontal mobile__logo">
                            <div>
                                <img src="./assets/QRcode.png" class="mobile__QRcodeImage" alt="QRCode">
                            </div>
                            <div class="mobile__logoContainer">
                                <img src="./assets/Ios.png" class="mobile__logoImage" alt="Logo IOS">
                            </div>
                        </div>
                    </div>
                    <div class="vertical mobile__card smallGap">
                        <h4 class="h4__title mobile__cardTitle">Pour Android</h4>
                        <p class="paragraph">Disponible sur Google Play, installez l'application Vroom</p>
                        <button class="button">Téléchargez</button>
                        <div class="horizontal mobile__logo">
                            <div>
                                <img src="./assets/QRcode.png" class="mobile__QRcodeImage" alt="QRCode">
                            </div>
                            <div class="mobile__logoContainer">
                                <img src="./assets/Android.png" class="mobile__logoImage" alt="Logo Android">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vertical smallGap center mobile__logo">
                    <div>
                        <img src="./assets/Logo_mobile.png" class="logoApplication" alt="">
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Simplifiez votre quotidien</h3>
                        <p class="paragraph">Réservez, gérez et payez vos trajets directement depuis votre mobile</p>
                    </div>
                </div>
            <button class="mobile__infoButton center">Ouvrir l'application</button>
        </div>
    </div>
`;

export const magHTML=`
    <div class="magContainer sectionContainer vertical gap">
        <div class="horizontal mag__header">
            <h2 class="h2__title">Le <strong>mag'</strong> Vroom</h2>
            <div class="mag__buttonContainer">
                <button type="text" class="mag__button">Voir les nouveautés</button>
                <button class="mag__buttonIcon">
                    <i class="fa-solid fa-arrow-right mag__fa-arrow-right center"></i>
                </button>
            </div>
        </div>
        <div class="horizontal mag__blogContainer gap">
            <div class="vertical mag__blogElement">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville1.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Inspiration</li>
                </ul>
                <p class="mag__blogTitle">5 idées de week-end évasion depuis votre ville</p>
                <p class="paragraph mag__blogParagraph">Envie de déconnecter le temps d'un week-end ? Découvrez nos 5 destinations coup de coeur...</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
            <div class="vertical mag__blogElement">
                <div class="mag_imageContainer">
                    <img src="./assets/Ville2.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Conseils</li>
                    <li>2026</li>
                </ul>
                <p class="mag__blogTitle">Comment voyager écolo sans se ruiner ?</p>
                <p class="paragraph mag__blogParagraph">Le covoiturage est l'un des moyens de transport les plus vertueux. Voici comment optimiser...</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
            <div class="vertical mag__blogElement">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville3.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Nouveautés</li>
                </ul>
                <p class="mag__blogTitle">Lancement de notre programme de fidélité "Vroomies"</p>
                <p class="paragraph mag__blogParagraph">Bonne nouvelle ! Cumulez des points sur tous vos trajets et échangez-les dès maintenant</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
        </div>
    </div>
`

export const magAdaptiveHTML =`
    <div class="magContainer sectionContainer vertical gap">
        <h2 class="h2__title">Le <strong>mag'</strong> Vroom</h2>
        <div class="vertical mag__blogContainer smallGap">
            <div class="horizontal mag__blogElement smallGap">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville1.png" class="mag__image" alt="">
                </div>
                <div class="vertical smallGap mag__infoElement">
                    <ul class="mag__tagContainer horizontal smallGap">
                        <li>Inspiration</li>
                    </ul>
                    <p class="mag__blogTitle">5 idées de week-end évasion depuis votre ville</p>
                    <p class="paragraph mag__blogParagraph">Envie de déconnecter le temps d'un week-end ? Découvrez nos 5 destinations coup de coeur...</p>
                </div>
            </div>
            <div class="horizontal mag__blogElement smallGap">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville2.png" class="mag__image" alt="">
                </div>
                <div class="vertical smallGap mag__infoElement">
                    <ul class="mag__tagContainer horizontal smallGap">
                        <li>Conseils</li>
                        <li>2026</li>
                    </ul>
                    <p class="mag__blogTitle">Comment voyager écolo sans se ruiner ?</p>
                    <p class="paragraph mag__blogParagraph">Le covoiturage est l'un des moyens de transport les plus vertueux. Voici comment optimiser...</p>
                </div>
            </div>
            <div class="horizontal mag__blogElement smallGap">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville3.png" class="mag__image" alt="">
                </div>
                <div class="vertical smallGap mag__infoElement">
                    <ul class="mag__tagContainer horizontal smallGap">
                        <li>Nouveautés</li>
                    </ul>
                    <p class="mag__blogTitle">Lancement de notre programme de fidélité "Vroomies"</p>
                    <p class="paragraph mag__blogParagraph">Bonne nouvelle ! Cumulez des points sur tous vos trajets et échangez-les dès maintenant</p>
                </div>
            </div>
        </div>
        <div class="mag__buttonContainer">
            <button type="text" class="mag__button">Voir toutes les nouveautés</button>
            <button class="mag__buttonIcon">
                <i class="fa-solid fa-arrow-right mag__fa-arrow-right center"></i>
            </button>
        </div>
    </div>
`;

export const magAdaptiveMobileHTML = `
    <div id="magContainer" class="magContainer sectionContainer vertical gap">
        <h2 class="h2__title">Le <strong>mag'</strong> Vroom</h2>
        <div class="vertical mag__blogContainer gap">
            <div class="vertical mag__blogElement">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville1.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Inspiration</li>
                </ul>
                <p class="mag__blogTitle">5 idées de week-end évasion depuis votre ville</p>
                <p class="paragraph mag__blogParagraph">Envie de déconnecter le temps d'un week-end ? Découvrez nos 5 destinations coup de coeur...</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
            <div class="vertical mag__blogElement">
                <div class="mag_imageContainer">
                    <img src="./assets/Ville2.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Conseils</li>
                    <li>2026</li>
                </ul>
                <p class="mag__blogTitle">Comment voyager écolo sans se ruiner ?</p>
                <p class="paragraph mag__blogParagraph">Le covoiturage est l'un des moyens de transport les plus vertueux. Voici comment optimiser...</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
            <div class="vertical mag__blogElement">
                <div class="mag__imageContainer">
                    <img src="./assets/Ville3.png" class="mag__image" alt="">
                </div>
                <ul class="mag__tagContainer horizontal smallGap">
                    <li>Nouveautés</li>
                </ul>
                <p class="mag__blogTitle">Lancement de notre programme de fidélité "Vroomies"</p>
                <p class="paragraph mag__blogParagraph">Bonne nouvelle ! Cumulez des points sur tous vos trajets et échangez-les dès maintenant</p>
                <p class="mag__blogMore">lire plus</p>
            </div>
        </div>
        <div class="mag__buttonContainer">
            <button type="text" class="mag__button">Voir les nouveautés</button>
            <button class="mag__buttonIcon">
                <i class="fa-solid fa-arrow-right mag__fa-arrow-right center"></i>
            </button>
        </div>
    </div>
`;

export const newsletterHTML=`
    <div class="sectionContainer">
        <div class="newsletter__background newsletterContainer horizontal">
            <div class="vertical gap newsletter__infoContainer">
                <h2 class="h2__title">Inscrivez-vous pour recevoir la <strong>newsletter</strong></h2>
                <div class="horizontal smallGap">
                    <div>
                        <img src="./assets/Logo_mobile.png" class="logoApplication" alt="">
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Restez toujours informés</h3>
                        <p class="paragraph">Recevez nos bons plans et actus en avant-première</p>
                    </div>
                </div>
            </div>
            <div class="vertical smallGap newsletter__formContainer">
                <div class="inputContainer">
                    <input type="text" class="newsletter__inputText" placeholder="votre adresse mail">
                    <button class="newsletter__buttonInputText">
                        <i class="fa-solid fa-arrow-right newsletter__fa-arrow-right center"></i>
                    </button>
                </div>
                <button class="button newsletter__button">Rejoindre</button>
            </div>
            <div class="newsletter__dessinContainer">
                <img src="./assets/Dessin_voiture.png" alt="Voiture dessin">
            </div>
        </div>
    </div>
`

export const newsletterAdaptiveHTML =`
    <div class="sectionContainer">
        <div class="newsletter__background newsletterContainer vertical center">
            <div class="vertical gap newsletter__infoContainer">
                <h2 class="h2__title">Inscrivez-vous pour recevoir la <strong>newsletter</strong></h2>
                <div class="vertical smallGap">
                    <div>
                        <img src="./assets/Logo_mobile.png" class="logoApplication" alt="">
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Restez toujours informés</h3>
                        <p class="paragraph">Recevez nos bons plans et actus en avant-première</p>
                    </div>
                </div>
                <div>
                    <img src="./assets/Dessin_voiture.png" alt="Voiture dessin">
                </div>
            </div>
            <div class="vertical smallGap newsletter__formContainer">
                <div class="inputContainer">
                    <input type="text" class="newsletter__inputText" placeholder="votre adresse mail">
                    <button class="newsletter__buttonInputText">
                        <i class="fa-solid fa-arrow-right newsletter__fa-arrow-right center"></i>
                    </button>
                </div>
                <button class="button newsletter__button">Rejoindre</button>
            </div>
        </div>
    </div>
`;

export const newsletterAdaptiveMobileHTML = `
    <div class="sectionContainer">
        <div class="newsletter__background newsletterContainer vertical center">
            <div class="vertical smallGap newsletter__infoContainer">
                <h2 class="h2__title">Inscrivez-vous pour recevoir la <strong>newsletter</strong></h2>
                <div class="vertical smallGap">
                    <div>
                        <img src="./assets/Logo_mobile.png" class="logoApplication" alt="">
                    </div>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Restez toujours informés</h3>
                        <p class="paragraph">Recevez nos bons plans et actus en avant-première</p>
                    </div>
                </div>
                <div>
                    <img src="./assets/Dessin_voiture.png" class="newsletter__dessin" alt="Voiture dessin">
                </div>
            </div>
            <div class="vertical smallGap newsletter__formContainer">
                <div class="inputContainer">
                    <input type="text" class="newsletter__inputText" placeholder="votre adresse mail">
                    <button class="newsletter__buttonInputText">
                        <i class="fa-solid fa-arrow-right newsletter__fa-arrow-right center"></i>
                    </button>
                </div>
                <button class="button newsletter__button">Rejoindre</button>
            </div>
        </div>
    </div>
`;