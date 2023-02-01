'use strict';
// alert('Bonjour le monde !');
let nom = 'Shannon';
console.log('Salut',nom);
//récupère le <h1> de la page
const titrePrincipal = document.querySelector('h1');
//titre en jaune
titrePrincipal.style.color = 'yellow';

/**
 * Ajoute du style à tous les li de la page
 */
    function styleLi() {
    //Récupère tous les <li>
    const elementsDeListe = document.querySelectorAll('li');
    console.log(elementsDeListe);
    //Met en rouge le 2e élément trouvé
    elementsDeListe[1].style.color = 'red';
    //Boucle qui parcours et met un fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = 'yellow';
    }
    //Même chose avec for..of
    for (let element of elementsDeListe) {
        element.style.fontWeight = 'bold';
    }
}
//Ecouter l'événement clic sur le <h1>
titrePrincipal.addEventListener("click", styleLi);

//Récupère le formulaire
const form = document.querySelector('form');
//Récupère la <ol> avec la classe commentaires
const olCommentaires = document.querySelector('.commentaires');
//Récupère l'input #commentaire
const inputCommentaire = document.querySelector('#commentaire');
//Ecouter l'envoi du formulaire
form.addEventListener('submit', function ajouterCommentaire(event){
    //stop l'envoi du formulaire
    event.preventDefault();
    //ajoute le contenu du champ commentaire
    olCommentaires.innerHTML += '<li>'+ inputCommentaire.value +'</li>';
    //vide le contenu du champ commentaire
    inputCommentaire.value = '';
    //redonne le focus au champ
    inputCommentaire.focus();
});