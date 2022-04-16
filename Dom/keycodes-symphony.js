// Like an inspired Beethoven who's going to write his Moonlight Sonata, you're about to compose a colourful symphony of letters with your keyboard.
// Write the function compose:
//     - Make it fire every time a key is pressed,
//     - Create a new div with the class note when a letter of the lowercase alphabet is pressed, which has a unique background color generated using the key of the event, and displays the corresponding letter pressed
//     - If the pressed key is [Backspace] (retour en arrière), delete the last note,
//     - If the pressed key is [Escape] (échap), clear all the notes.

export { compose }

function compose() 
{
    // Si je presse une touche du clavier (event type = "keydown"), j'exécute la fonction addNewDiv définie plus bas: 
    document.addEventListener("keydown", addNewDiv);

    // La fonction addNewDiv a pour paramètre myKeyboardEvent, qui représente la touche du clavier sur laquelle on a appuyé :
    function addNewDiv(myKeyboardEvent)
    {
        // N.B. : myKeyboardEvent.keyCode renvoie le code correspond à la touche (généralement compris entre 8 et 222).
        // N.B. : myKeyboardEvent.key renvoie le caractère correspondant à la touche sous forme de string. Par exemple : 'a', 'b', 'ArrowUp', 'Escape', 'Backspace', etc.
        
        // Si la touche appuyée est une lettre minuscule :
        if(myKeyboardEvent.keyCode >= 65 && myKeyboardEvent.keyCode <= 90)        // Équivalent à : if((/^[a-z]{1}/).test(myKeyboardEvent.key) && myKeyboardEvent.key.length == 1)
        {
            let newDiv = document.createElement("div");
            newDiv.classList.add("note");
            newDiv.textContent = myKeyboardEvent.key;
            let color = (myKeyboardEvent.keyCode - 65) * 9;        // Le keyCode des lettres minuscules vont de 65 ('a') à 90 ('z'), donc colors va aller de 0 à 225. 
            newDiv.style.background = `rgb(${color}, ${color}, ${color})`   // Va aller de rgb(0, 0, 0) (black) à rgb(225, 225, 225) (gris très clair).

            document.body.appendChild(newDiv);
        }

        // Si la touche appuyée est [Retour en arrière], on supprime la dernière <div> </div> :
        if(myKeyboardEvent.key == "Backspace")      // Équivalent à : if(myKeyboardEvent.keyCode == 8)
        {
            document.body.lastChild.remove();
            // Équivalent à :
            // let allDivs = document.getElementsByTagName("div");
            // allDivs[allDivs.length - 1].remove();
        }

        // Si la touche appuyée est [Échap], on supprime toutes les divs :
        if(myKeyboardEvent.key == "Escape")
        {
            document.body.textContent = "";
            // Équivalent à :
            // let allDivs = document.getElementsByTagName("div");
            // allDivs.forEach(function (div)
            // {
            //     div.remove()
            // });
        }
    }
}
