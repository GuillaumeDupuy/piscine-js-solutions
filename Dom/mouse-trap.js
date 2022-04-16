// Develop a trap to capture the elements when the mouse is getting too close to the center of the page!
//     1️⃣ Create a function createCircle: make it fire on every click on the page, and create a div at the position of the mouse on the screen, setting its background to white and its class to circle
//     2️⃣ Create a function moveCircle: make it fire when the mouse moves, and get the last circle created and makes it move along with the mouse
//     3️⃣ Create a function setBox which sets a box with the class 'box' in the center of the page ; when a circle is inside that box, it has to be purple (use the CSS global variable 'var(--purple)' as background).
//         Once a circle enters the box, it is trapped inside and cannot go out of it anymore.
// 💡 Hint: Be careful, a circle cannot overlap the box which has walls of 1px, it has to be trapped strictly inside.
// 💡 Check this link for help : https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

// 📜 Note 1 : mouseEvent.client(X ou Y)        🡆   sert à récupérer (lire) les coordonnées du curseur de la souris.
// 📜 Note 2 : element.getBoundingClientRect()  🡆   sert à récupérer les coordonnées d'un élément (left, right, top, bottom, width, height).
// 📜 Note 3 : element.style(.left ou .top)     🡆   sert à *assigner* des coordonnées à un élément.


export { createCircle, moveCircle, setBox }

function createCircle() 
{
    document.addEventListener("click", addNewCircle)     // A chaque clic sur la page, on exécute la fonction addNewCircle définie plus bas.
    
    function addNewCircle(myMouseEvent)     // myMouseEvent représente le curseur de la souris lorsqu'on fait un clic.
    {
        let myCircle = document.createElement("div");
        myCircle.classList.add("circle");
        myCircle.style.background = "white";

        let x = myMouseEvent.clientX - 25;      // myMouseEvent.clientX (read-only) : coordonnée horizontale du curseur de la souris (centre du cercle). On garde une marge de 25px car c'est le rayon du cercle, qui ne doit pas dépasser de l'écran.
        let y = myMouseEvent.clientY - 25;      // myMouseEvent.clientY (read-only) : coordonnée verticale du curseur de la souris (centre du cerlce). On garde une marge de 25px pour la même raison.

        myCircle.style.left = `${x}px` ;        // On donne à la coordonnée horizontale du cercle la valeur de la position horizontale du curseur de la souris.
        myCircle.style.top = `${y}px` ;         // On donne à la coordonnée verticale du cercle la valeur de la position verticale du curseur de la souris.

        // Si le curseur de la souris rentre dans la 'boîte' (rectangle central), on crée des cercles violets plutôt que blancs :
        if(isInBox(x, y)) { myCircle.style.background = "var(--purple)" }

        document.body.appendChild(myCircle);      // On ajoute le cercle au document HTML.

        
    }
}



function isInBox(x, y) 
{
    let box = document.getElementsByClassName("box")[0];

    // On définit les coordonnées gauche, droite, haute et basse de la boîte :
    let boxLeft = box.getBoundingClientRect().left;     // getBoundingClientRect().left 🡄🡆 getBoundingClientRect().x (équivalents).
    let boxRight = box.getBoundingClientRect().right - 50;
    let boxTop = box.getBoundingClientRect().top;       // getBoundingClientRect().top 🡄🡆 getBoundingClientRect().y (équivalents).
    let boxBottom = box.getBoundingClientRect().bottom - 50;

    // Si les coordonnées x et y du curseur sont dans les limites de la boîte, on renvoie true :
    if(x > boxLeft && x < boxRight && y > boxTop && y < boxBottom) { return true}
}



function moveCircle() 
{
    document.addEventListener("mousemove", moveMyCircle)    // A chaque mouvement de la souris, on exécute la fonction moveMyCircle définie plus bas.
    
    function moveMyCircle(myMouseEvent)     // myMouseEvent représente le curseur de la souris à chacun de ses déplacements.
    {
        let allCircles = document.getElementsByClassName("circle")
        let myCircle = allCircles[allCircles.length - 1];
        let box = document.getElementsByClassName("box")[0];

        // Positions x et y du curseur de la souris à chaque instant :
        let x = myMouseEvent.clientX - 25;
        let y = myMouseEvent.clientY - 25;

        // Coordonnées de la boîte :
        let boxLeft = box.getBoundingClientRect().left;
        let boxRight = box.getBoundingClientRect().right - 50;
        let boxTop = box.getBoundingClientRect().top;
        let boxBottom = box.getBoundingClientRect().bottom - 50;

        // Si le curseur de la souris passe dans la boîte, il devient violet :
        if(isInBox(x, y))
        { 
            myCircle.style.background = "var(--purple)" 
        }

        // Si le cercle généré est de couleur violette, il ne doit plus pouvoir sortir de la boîte :
        if(myCircle.style.background.startsWith("var(--purple)"))
        {
            // 1️⃣ A l'horizontal :
            if(x > boxLeft && x < boxRight)    // Si la position horizontale du curseur est comprise entre les côtés gauche et droit de la boîte...
            {
                myCircle.style.left = `${x}px` ;    // ...alors la coordonnée horizontale du cercle prend la position x du curseur (c-à-d, le cercle suit parfaitement le curseur).
            }
            else    // Sinon...
            {
                if(x < boxLeft) { myCircle.style.left = `${boxLeft}px` }  // ...si le curseur se déplace à gauche de la boîte, la coord. horiz. du cercle prend pour valeur la coord. du côté gauche de la boîte : donc le cercle ne pourra jamais sortir/dépasser de la boîte par la gauche, puisque sa coord. horiz. est celle de la limite gauche de la boîte.
                if(x > boxRight) { myCircle.style.left = `${boxRight}px` }  // ...si le curseur se déplace à droite de la boîte, la coord. horiz. du cercle prend pour valeur la coord. du côté droit de la boîte : donc le cercle ne pourra jamais sortir/dépasser de la boîte par la droite, puisque sa coord. horiz. est celle de la limite droite de la boîte.
            }
            
            // 2️⃣ A la verticale :
            if(y > boxTop && y < boxBottom)     // Si la position verticale du curseur est comprise entre les côtés haut et bas de la boîte...
            {
                myCircle.style.top = `${y}px` ;     // ...alors la coordonnée verticale du cercle prend la position y du curseur (c-à-d, le cercle suit parfaitement le curseur).
            }
            else    // Sinon...
            {
                if(y < boxTop) { myCircle.style.top = `${boxTop}px` }  // ...si le curseur se déplace au dessus de la boîte, la coord. verti. du cercle prend pour valeur la coord. du côté haut de la boîte : donc le cercle ne pourra jamais sortir/dépasser de la boîte par en haut, puisque sa coord. verti. est celle de la limite haute de la boîte.
                if(y > boxBottom) { myCircle.style.top = `${boxBottom}px` }  // ...si le curseur se déplace sous la boîte, la coord. verti. du cercle prend pour valeur la coord. du côté bas de la boîte : donc le cercle ne pourra jamais sortir/dépasser de la boîte par en bas, puisque sa coord. verti. est celle de la limite basse de la boîte.
            }
    }
    else    // Si le cercle généré n'est pas violet mais blanc, alors les coordonnées du cercle sont les coordonnées du curseur :
    {
        myCircle.style.left = `${x}px` ;
        myCircle.style.top = `${y}px` ;
    }
}
}



function setBox() 
{
    let box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);
}