// You've been asked to freshen a webpage atmosphere by displaying shades of cold colors.
// Check the colors array provided in the data file below.
// 1️⃣ Write the generateClasses function which creates a <style> tag in the <head> tag and generates, for each color of colors, a class setting the background attribute and taking the color as value, like following:

// .indianred {
//   background: indianred;
// }

// 2️⃣ Write the generateColdShades function which creates a <div> for each color of the colors array whose name contains aqua, blue, turquoise, green, cyan, navy or purple.
// Each <div> must have the corresponding generated class and display the name of the color, like following:

// <div class="indianred">indianred</div>

// 3️⃣ The function choseShade is triggered when clicking on a div.
// Write the body of this function, which receives the shade of the clicked element as argument, and replaces all the other elements class by the chosen shade.


import { colors } from './fifty-shades-of-cold.data.js'

export { generateClasses, generateColdShades, choseShade }

function generateClasses() 
{
    // Je crée l'élément <style> </style> :
    let style = document.createElement("style");

    // Pour chaque couleur de l'array colors du fichier data.js, j'ajoute ".nom-de-la-couleur {background: nom-de-la-couleur;}" au contenu texte de l'élément style :
    // Ne pas oublier d'ajouter un saut de ligne (\n) à la fin.
    colors.forEach(function(colorName)
    {
        style.textContent += (`.${colorName}{background: ${colorName};} \n`);

        // J'ajoute l'élément style à l'élément HEAD du document HTML :
        document.head.appendChild(style);
    });
}


function generateColdShades() 
{
    // Pour chaque couleur froide de l'array colors, je crée une div :
    let regex = /(aqua|blue|turquoise|green|cyan|navy|purple)/i;     // Regex des nuances froides.
    
    colors.forEach(function(colorName)       // Pour chaque couleur de l'array colors...
    {
        if(regex.test(colorName))   // ...si la couleur contient une nuance froide...
        {
            // ...je crée un <div> </div>, je lui ajoute une class = nom-de-couleur, et un contenu texte 'nom-de-couleur' :
            let newDiv = document.createElement("div");
            newDiv.classList.add(colorName);    // Équivalent à : newDiv.className = color; ⚠️ Attention : pour ajouter une classe supplémentaire en utilisant .className, il faudra écrire : newDiv.className += " name-of-class", avec un espace avant le nom de la nouvelle classe pour ne pas corrompre le nom des classes précédentes.
            newDiv.textContent = colorName;

            // J'ajoute l'élément div au body du document HTML :
            document.body.appendChild(newDiv);
        }
    });
}


function choseShade(shade) 
{
    let allDivs = Array.from(document.getElementsByTagName("div"));     // ⚠️ Ne pas oublier de convertir la collection d'éléments en array avec Array.from(...) !
    allDivs.forEach(function(div)
    {
        div.className = "";     // Équivalent à : div.classList.remove(div.classList[div.classList.length - 1])
        div.classList.add(shade);
    });
}