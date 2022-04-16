// Today, you're gonna create your own color picker.
// Write the function pick which turns the screen into a hsl color picker, varying the hue and luminosity of according to the position of the mouse, which:

//     - changes the background color of the body, so the hsl value is different on each mouse position on the screen:
//         on the axis X, the hue value has to vary between 0 and 360
//         on the axis Y, the luminosity value has to vary between 0 and 100
//     - displays those 3 values using the text class:
//         the full hsl value in a div with the class hsl in the middle of the screen
//         the hue value in a div with the class hue in the top right corner of the screen
//         the luminosity value in a div with the class luminosity in the bottom left corner of the screen
//     - copies that value in the clipboard on click
//     - displays two SVG lines, with respective ids axisX and axisY, following the cursor like so:
//         the axisX has to set the attributes x1 and x2 to the mouse X position
//         the axisY has to set the attributes y1 and y2 to the mouse Y position
//     Here is how a hsl value is formatted: hsl(45, 50%, 35%)
//     Use Math.round() to round the values


export { pick }

let hsl;

function pick() {

    // On exécute la fonction createDivs :
    createDivs()

    document.addEventListener('mousemove', event => {

        // Coordonnées du curseur :
        let x = event.clientX
        let y = event.clientY

        // Dimensions du document :
        let width = document.body.clientWidth
        let height = document.body.clientHeight

        // Valeurs de la couleur et de la luminosité en fonction de la position du curseur :
        let hue = Math.round((x / width) * 360)
        let luminosity = Math.round((y / height) * 100)
        hsl = `hsl(${hue}, 50%, ${luminosity}%)`

        document.body.style.background = hsl

        // --------> Dès à présent, la couleur/luminosité du background changent en fonction de la position du curseur <--------
        // La suite permet d'afficher les valeurs de la couleur/luminosité à l'écran, ainsi que de créer deux axes X et Y visibles à l'écran :

        // On récupère les éléments grâce à leur classe ou identifiant :
        let hslElem = document.querySelector('.hsl')
        let hueElem = document.querySelector('.hue')
        let luminosityElem = document.querySelector('.luminosity')
        let axisX = document.getElementById('axisX')
        let axisY = document.getElementById('axisY')

        // On ajoute leurs valeurs comme contenu texte :
        hslElem.textContent = hsl
        hueElem.textContent = `hue\n${hue}`
        luminosityElem.textContent = `${luminosity}\nluminosity`

        // Les 2 paragraphes suivants servent à créer un axe X et un axe Y visibles à l'écran :
        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisX.setAttribute('y1', 0);
        axisX.setAttribute('y2', width);

        axisY.setAttribute('x1', 0);
        axisY.setAttribute('x2', height);
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);

    })

    // Dès qu'on clique sur l'écran (document.body), on exécute la commande 'copy' :
    document.body.addEventListener('click', () => {
        document.execCommand("copy");
    })

    // Dès qu'on exécute la commande 'copy', on ajoute la valeur actuelle de hsl au presse-papier : 
    document.body.addEventListener('copy', (event) => {
        event.clipboardData.setData('text/plain', hsl);
        event.preventDefault();
    })
}

function createDivs() {
    let hslDiv = document.createElement('div')
    hslDiv.classList.add('text', 'hsl')
    document.body.appendChild(hslDiv)

    let hueDiv = document.createElement('div')
    hueDiv.classList.add('text', 'hue')
    document.body.appendChild(hueDiv)

    let luminosityDiv = document.createElement('div')
    luminosityDiv.classList.add('text', 'luminosity')
    document.body.appendChild(luminosityDiv)

    let SVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    let line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    let line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.id = 'axisX'
    line2.id = 'axisY'
    SVG.appendChild(line1)
    SVG.appendChild(line2)
    document.body.appendChild(SVG)
}