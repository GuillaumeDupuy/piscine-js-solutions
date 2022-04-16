import { styles } from './pimp-my-style.data.js'

export { pimp }

let i = 0;      // Le compteur i démarre à 0.
let firstRound = true;      //firstRound est initialisé sur true (sens croissant).

function pimp() 
{
    let myButton = document.getElementsByClassName("button")[0];
    const lastClassOfStyles = styles[styles.length - 1];  // "fifteen"

    // Si firstRound = true, cela veut dire qu'on démarre en sens croissant :
    if(firstRound)
    {
            // On ajoute la classe styles[i] aux classes de myButton, et on incrémente i :
            myButton.classList.add(styles[i]);
            i++;
            // Si la dernière classe de myButton est la dernière classe de styles, on ajoute la classe 'unpimp' firstRound devient false.
            if(myButton.classList[i] === lastClassOfStyles) 
            {
                myButton.classList.add("unpimp"); 
                firstRound = false 
            }
    }

    // Si firstRound = false, cela veut dire qu'on part en arrière (sens décroissant) :
    if(!firstRound)
    {
            // On supprime la classe styles[i] des classes de myButton, et on décrémente i :
            myButton.classList.remove(styles[i]);
            i--;
            // Dès qu'il ne reste plus que les classes "button one unpimp", on supprime 'unpimp' et 'one' et on repart dans l'autre sens :
            if(i < 0) 
            {
                myButton.classList.remove("unpimp", "one");
                firstRound = true;
                i=0;
            }
    }
}