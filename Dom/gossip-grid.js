// Good information is the pillar of society, that's why you've decided to dedicate your time to reveal the powerful truth to the world and deliver essential and strong news: you're launching a gossip grid.

// Create the function grid which displays all the gossips, provided in the data file below, as cards on a grid (in the same order).
// They must be div with the gossip class.

// The first gossip card must be a form with a textarea and a submit button with the text Share gossip! that allows to add a new gossip to the list.

// Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges:

//     one with id="width" that control the width of cards (from 200 to 800 pixels)
//     one with id="fontSize" that control the font size (from 20 to 40 pixels)
//     one with id="background" that control the background lightness (from 20% to 75%)

//     tips: use hsl for colors


import { gossips } from './gossip-grid.data.js'

export { grid }


function create() 
{
    // Je crée un formulaire avec le tag <form>...</form> pour recueillir l'entrée de l'utilisateur :
    let form = document.createElement("form");
    form.classList.add("gossip");

    // Je crée un tag <textarea></textarea> qui viendra s'insérer à l'intérieur du tag <form> :
    let textArea = document.createElement("textarea");
    textArea.placeholder = "Do you have a gossip to share?"    // Équivalent à : textArea.setAttribute("placeholder", "Do you have a gossip to share?")

    // Je crée un élément <button></button> qui sera sous la zone de texte textArea :
    let myButton = document.createElement("button");
    myButton.textContent = "Share gossip!"

    // J'ajoute les éléments enfants à l'élément <form>, puis <form> au document HTML :
    form.appendChild(textArea);
    form.appendChild(myButton);
    document.body.appendChild(form);

    // Je parcours le tableau gossips du fichier data.js :
    gossips.forEach(function(gossip)
    {
        // Je crée une nouvelle div/carte à partir de chaque gossip. 
        // (J'utilise le paramètre false pour que les gossips soient générés les uns à la suite des autres). 
        // (L'argument true, lui, sera utilisé lorsqu'un utilisateur voudra ajouter son propre gossip, et que celui-ci devra être généré en tête de liste, devant tous les autres gossips, mais après l'élément <form> contenant le <textarea> tout de même).
        newGossip(gossip, false)
    });

    // Création des curseurs pour régler la taille des divs :

    let rangesDiv = document.createElement('div')
    rangesDiv.className = 'ranges'

    let ids = ['width', 'fontSize', 'background']
    let minAndMax = [[200, 800], [20, 40], [20, 75]]
    let defaultValues = [437, 25, 33]

    for (let i = 0; i < 3; i++) {
        let range = document.createElement('input')
        range.className = 'range'
        range.setAttribute('type', 'range')
        range.id = ids[i]
        range.min = minAndMax[i][0]
        range.max = minAndMax[i][1]
        range.value = defaultValues[i]
        rangesDiv.appendChild(range)
    }
    document.body.appendChild(rangesDiv)
}



function newGossip(gossip, comesToFront) 
{
    // Pour chaque gossip du tableau gossips, je crée une div, dont la classe est 'gossip', et dont le contenu texte est le gossip en question :
    let newDiv = document.createElement("div");
    newDiv.classList.add("gossip")
    newDiv.textContent = gossip;

    // Si la fonction newGossip est appelé avec un paramètre comesToFront égal à true, alors j'ajoute la newDiv en 2nde position, juste après l'élément <form> contenant le <textarea>.
    // Pour cela, je récupère le 1er élément dont la classe est 'gossip' (c'est l'élément <form>), et j'ajoute newDiv juste après avec .after(newDiv) :
    if(comesToFront === true) { document.querySelector(".gossip").after(newDiv) }
    // Sinon (si comesToFront est false), j'ajoute simplement newDiv au body, à la suite des autres divs existant :
    else { document.body.appendChild(newDiv) }

    // ---------------------------------------------------
    // 📜 Exemple d'utilisation de .after(...) :

    // let div = document.createElement("div")
    // let p = document.createElement("p")
    // let span = document.createElement("span")

    // div.appendChild(p)  🡆 pour l'instant, cela donne : 
    //      <div>
    //           <p></p>
    //      </div>

    // p.after(span)  🡆 <span> vient s'insérer après <p>. Cela donne : 
    //      <div>
    //           <p></p>
    //           <span></span>
    //      </div>
    // ---------------------------------------------------
}



function grid() 
{
    // J'exécute la fonction create (qui crée le formulaire, le bouton, et génère tous les gossips grâce à la fonction newGossip) :
    create();
    
    // Je récupère mes éléments :
    let myButton = document.querySelector("button");
    let textArea = document.querySelector("textarea");
    
    // Les curseurs :
    let width = document.getElementById('width')
    let fontSize = document.getElementById('fontSize')
    let background = document.getElementById('background')

    // Dès qu'on clique sur le bouton, on exécute la fonction addUsersGossip, qui va ajouter le gossip rédigé par l'utilisateur :
    myButton.addEventListener("click", addUsersGossip)
    function addUsersGossip(inputEvent)
    {
        let usersGossip = textArea.value;   // La saisie de l'utilisateur dans la zone textArea est stockée dans la variable usersGossip.
        textArea.value = "";    // Je réinitialise textArea à sa valeur par défaut (vide).
        if(usersGossip == "")   // // Si l'utilisateur rentre une string vide, je ne crée pas de nouvelle div et je change le placeholder de textArea.
        { 
            textArea.placeholder = "Your gossip is empty."; 
            inputEvent.preventDefault()     // ⚠️ IMPORTANT
        } 
        else
        {
            newGossip(usersGossip, true);   // Je crée un nouveau gossip à partir de la saisie de l'utilisateur, et je place la div/carte créée en 2nde position, juste après la <textarea>.
            textArea.placeholder = "Do you have a new gossip to share?"     // Je réinitialise le placeholder de textArea.
            inputEvent.preventDefault();
        }
    }

    // Règlage des curseurs :

    width.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            gossips[i].style.width = `${width.value}px`
        }
    })

    background.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            gossips[i].style.background = `hsl(280, 50%, ${background.value}%)`
        }
    })

    fontSize.addEventListener('input', event => {
        let gossips = document.getElementsByClassName('gossip')
        for (let i = 0; i < gossips.length; i++) {
            gossips[i].style.fontSize = `${fontSize.value}px`
        }
    })

}






