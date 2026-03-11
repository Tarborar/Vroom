export const tabletHTML = `
    <div class="main vertical bigGap">
        <!--#################### -- HOME -- ####################-->
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
        <!--#################### -- BANNER -- ####################-->
        <div class="bannerBackground">
            <div id="bannerContainer" class="bannerContainer horizontal">
                <div class="smallGap bannerElement">
                    <i class="fa-solid fa-earth-americas"></i>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">Plus écoresponsable</h3>
                        <p class="paragraph">Réduisez ensemble votre empreinte carbone au quotidien</p>
                    </div>
                </div>
                <div class="smallGap bannerElement">
                    <i class="fa-solid fa-tag"></i>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">A prix mini</h3>
                        <p class="paragraph">Économisez jusqu'à 60% sur vos trajets quotidiens</p>
                    </div>
                </div>
                <div class="smallGap bannerElement">
                    <i class="fa-solid fa-check"></i>
                    <div class="vertical paragraphGap">
                        <h3 class="h3__title">En toute confiance</h3>
                        <p class="paragraph">Profils vérifiés et avis certifiés par nos équipes</p>
                    </div>
                </div>
            </div>
        </div>
        <!--#################### -- EXPLANATION -- ####################-->
        <div class="explanationContainer sectionContainer horizontal gap">
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
        <!--#################### -- VIDEO -- ####################-->
        <div class="video__background">
            <div id="videoContainer" class="videoContainer">
                <div class="sectionContainer center video__thumbnailContainer">
                    <img src="./assets/Covoiturage_2.png" class="video__thumbnail" alt="">
                    <img src="./assets/button_play.png" class="video__iconPlay" alt="">
                </div>
            </div>
        </div>
        <!--#################### -- TRUST -- ####################-->
        <div class="trustContainer sectionContainer horizontal gap">
            <div class="horizontal">
                <div class="vertical trust__startPosition">
                    <div class="horizontal center trust__startPosition">
                        <i class="fa-solid fa-arrow-up"></i>
                        <p class="trust__number">850+</p>
                    </div>
                    <p class="trust__titleNumber">Trajets quotidiens</p>
                    <p class="trust__paragraph paragraph">Des départs réguliers vers toutes les villes de France</p>
                </div>
                <div>
                    <img src="./assets/Confiance_illustration1.png" class="trust__illustration" alt="">
                </div>
            </div>
            <div class="horizontal">
                <div>
                    <img src="./assets/Confiance_illustration2.png" class="trust__illustration" alt="">
                </div>
                <div class="vertical trust__endPosition">
                    <div class="horizontal center trust__endPosition">
                        <i class="fa-solid fa-arrow-up"></i>
                        <p class="trust__number">4M+</p>
                    </div>
                    <p class="trust__titleNumber">Membres actifs</p>
                    <p class="trust__paragraph paragraph">Une communauté soudée et en pleine croissance constante</p>
                </div>
            </div>
            <div class="horizontal">
                <div class="vertical trust__startPosition">
                    <div class="horizontal center trust__startPosition">
                        <p class="trust__number">4.5/5</p>
                    </div>
                    <p class="trust__titleNumber">Note moyenne</p>
                    <p class="trust__paragraph paragraph">La satisfaction de nos utilisateurs est notre priorité absolue </p>
                </div>
                <div>
                    <img src="./assets/Confiance_illustration3.png" class="trust__illustration" alt="">
                </div>
            </div>
            
        </div>
        <!--#################### -- POINT -- ####################-->
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
        <!--#################### -- MOBILE -- ####################-->
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
        <!--#################### -- REVIEW -- ####################-->
        <div class="sectionContainer review__background">
            <div class="reviewContainer vertical center gap">
                <h2 class="h2__title review__title">Les membres adorent</h2>
                <div id="review" class="vertical gap review__cardContainer">
                    <div class="vertical review__card smallGap">
                        <div class="horizontal smallGap">
                            <div class="review__avatarContainer">
                                <img src="https://randomuser.me/api/portraits/women/11.jpg" class="review__avatar" alt="">
                            </div>
                            <div class="vertical review__avatarInfo">
                                <p class="review__name">Manon Richard</p>
                                <div class="review__star">Etoiles</div>
                            </div>
                        </div>
                        <p class="paragraph review__comment">J'utilise Vroom tous les jours pour aller au travail. Économies garanties et bonne ambiance !</p>
                    </div>
                    <div class="vertical review__card smallGap">
                        <div class="horizontal smallGap">
                            <div class="review__avatarContainer">
                                <img src="https://randomuser.me/api/portraits/women/11.jpg" class="review__avatar" alt="">
                            </div>
                            <div class="vertical review__avatarInfo">
                                <p class="review__name">Manon Richard</p>
                                <div class="review__star">Etoiles</div>
                            </div>
                        </div>
                        <p class="paragraph review__comment">J'utilise Vroom tous les jours pour aller au travail. Économies garanties et bonne ambiance ! J'utilise Vroom tous les jours pour aller au travail.</p>
                    </div>
                    <div class="vertical review__card smallGap">
                        <div class="horizontal smallGap">
                            <div class="review__avatarContainer">
                                <img src="https://randomuser.me/api/portraits/women/11.jpg" class="review__avatar" alt="">
                            </div>
                            <div class="vertical review__avatarInfo">
                                <p class="review__name">Manon Richard</p>
                                <div class="review__star">Etoiles</div>
                            </div>
                        </div>
                        <p class="paragraph review__comment">J'utilise Vroom tous les jours pour aller au travail. Économies garanties et bonne ambiance !</p>
                    </div>
                </div>
                <div class="horizontal gap">
                    <i class="fa-solid fa-angle-left"></i>
                    <p class="review__count">01/12</p>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
                
            </div>
        </div>
        <!--#################### -- MAG -- ####################-->
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
        <!--#################### -- NEWSLETTER -- ####################-->
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
        <!--#################### -- DESSIN -- ####################-->
        <div class="sectionContainer dessinContainer">
            <img src="./assets/dessin.png" class="dessin__image" alt="Dessin Trajet">
        </div>
        <!--#################### -- FAQ -- ####################-->
        <div class="sectionContainer vertical bigGap">
            <h2 class="h2__title">Toutes les <strong>réponses</strong> à vos questions juste ici !</h2>
            <div class="faqContainer vertical smallGap">
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Comment créer un compte Vroom ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Comment fonctionnent les points ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Puis-je annuler une réservation ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Quelle est la politique des bagages ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Le site est-il sécurisé ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
                <div>
                    <div class="horizontal faq__questionContainer">
                        <p class="faq__question">Puis-je amener mes animaux de compagnie ?</p>
                        <button class="faq__button">+</button>
                    </div>
                    <p class="faq__answer"></p>
                </div>
            </div>
        </div>
        <!--#################### -- FOOTER -- ####################-->
        <footer class="horizontal gap">
            <div class="footer__logoContainer">
                <img src="./assets/Logo_blanc.png" class="footer__logo" alt="Logo">
            </div>
            <div class="sectionContainer horizontal gap footerContainer">
                <div class="vertical gap">
                    <h4 class="footer__titleNavigation">Navigation</h4>
                    <ul class="footer__navigationContainer vertical">
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Avantage</a></li>
                        <li><a href="">Application</a></li>
                        <li><a href="">Mag'</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div class="vertical gap">
                    <h4 class="footer__titleNavigation">Support</h4>
                    <ul class="footer__navigationContainer vertical">
                        <li><a href="">Aide</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div class="vertical smallGap test">
                    <h4 class="footer__titleNavigation">Newsletter</h4>
                    <p class="footer__newsletterParagraph">Ne manquez plus aucune de nos offres exceptionnelles</p>
                    <div class="inputContainer">
                        <input type="text" class="footer__inputText" placeholder="votre adresse mail">
                        <button class="footer__buttonInputText">
                            <i class="fa-regular fa-envelope center"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
`