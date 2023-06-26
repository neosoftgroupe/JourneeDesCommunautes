/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('indice1').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("indice1Popup", "Indice : Je suis le Practice leader de la Practice DEVOPS, la lettre que tu recherches est la première de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice1').subscribe(closePopup)

    WA.room.area.onEnter('indice2').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice2Popup", "Indice : J'ai ouvert le forum des communauté et je suis le PDG, la lettre que tu recherches est la première de mon prenom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice2').subscribe(closePopup)

    WA.room.area.onEnter('indice3').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice3Popup", "Indice : Je suis le Practice leader de la Practice INFRA / CLOUD, la lettre que tu recherches est la quatrième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice3').subscribe(closePopup)

    WA.room.area.onEnter('indice4').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice4Popup", "Indice : Je suis un des Practice leader de la Practice CYBER mais pas Sylvain, la lettre que tu recherches est la septième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice4').subscribe(closePopup)

    WA.room.area.onEnter('indice5').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice5Popup", "Indice : Je suis le Practice leader de la Practice AGILITE, la lettre que tu recherches est la quatrième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice5').subscribe(closePopup)

    WA.room.area.onEnter('indice6').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice6Popup", "Indice : Je suis le Social Media Manager de Néosoft, la lettre de que tu recherches est la dernière de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice6').subscribe(closePopup)

    WA.room.area.onEnter('indice7').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice7Popup", "Indice : Je suis la Responsable formation Néosoft Training, la lettre que tu recherches est la première de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice7').subscribe(closePopup)

    WA.room.area.onEnter('indice8').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice8Popup", "Indice : Je suis le Practice leader de la Practice Software Engineering, la lettre que tu recherches est la deuxième de mon prénom !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice8').subscribe(closePopup)

    WA.room.area.onEnter('indice9').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice9Popup", "Mon tout est l'anagramme d'une plante connues pour ses jolies fleurs bleues !", [{
            label: "OK, merci !",
            className: "primary",
            callback: (popup) => {
                popup.close();
            }
        }]);
    })

    WA.room.area.onLeave('indice9').subscribe(closePopup)
    

    WA.room.area.onEnter('rs').subscribe(() => {
        currentPopup = WA.ui.openPopup("rsPopup", "Tu veux nous suivre sur les réseaux sociaux ?", [{
            label: "Linkedin",
            className: "primary",
            callback: (popup) => {
                WA.openTab('https://www.linkedin.com/company/neosoft_'),
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }    
        },
        {
            label: 'Twitter',
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://twitter.com/neosoft_'),
                popup.close();
            }
        }]);

    })

    WA.room.area.onLeave('rs').subscribe(closePopup)

    WA.room.area.onEnter('fdn').subscribe(() => {
        currentPopup = WA.ui.openPopup("fdnPopup", "Viens te sensibiliser aux enjeux du numérique !", [{
            label: "Je m'inscris à une fresque",
            className: 'primary',
            callback: (popup) => {
                WA.openTab('https://landing.neosoft.fr/numerique-responsable'),
                popup.close();
            }
        }]);

    })

    WA.room.area.onLeave('fdn').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
