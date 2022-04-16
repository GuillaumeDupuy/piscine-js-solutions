// Today, your mission is to build a 3-column brick tower, maintain it and finally break it!

// Create a function build which will create and display the given amount of bricks passed as argument:
//     - each brick has to be created as a div and added to the page at a regular interval of 100ms,
//     - each brick will receive a unique id property, like the following: <div id="brick-1"></div>
//     - each brick in the middle column has to be set with the custom data attribute foundation receiving the value true.

// Each one of the two emojis in the top-right corner fires a function on click:
//     🔨 triggers the function repair: write the body of that function, which receives any number of ids, and for each id, retrieves the HTML element and set a custom attribute 'repaired' set to 'in progress' if it is a brick situated in the middle column, and true if not.
//     🧨 triggers the function destroy: write the body of that function, which removes the current last brick in the tower.


export { build, addBrick, repair, destroy }

let counter = 0;    // La variable counter va aller de 1 à 3, pour déterminer si une brique est au milieu ou non (counter === 2), puis revenir à 0, et ainsi de suite.
let interval;

function build(bricksNum) {
    // J'exécute la fonction addBrick (qui prend un paramètre bricksNum) continuellement toutes les 100 millisecondes :
    return interval = setInterval(addBrick, 100, bricksNum)     // Fonctionne aussi sans return.
}

function addBrick(bricksNum) {
    // Nombre d'éléments dont la classe est "brick" :
    let n = document.getElementsByClassName("brick").length;    // Au départ, n = 0 puisqu'il n'y a aucune brique de créée.

    // Si le nombre de briques créées jusque là (n) atteint le nombre de briques à créer au total (brickNum),
    // alors on stoppe la fonction :
    if(n == bricksNum)
    {
        clearInterval(interval)
        return;
    }

    counter++;

    // Je crée une variable newDiv qui représentera une brique :
    let newDiv;

    // Je crée une section <div></div> que je stocke dans la variable newDiv :
    newDiv = document.createElement("div");

    // Je lui attribue une classe "brick", un ID "brick-XXX", et je lui ajoute son numéro (n+1) en tant que texte interne :
    newDiv.setAttribute("class", "brick");
    newDiv.setAttribute("id", `brick-${n+1}`);  // Je rajoute 1 car n commence à 0, alors que les briques doivent être numérotée à partir du n° 1.
    newDiv.innerHTML = n+1;

    // Si la brique est au milieu, on nous demande de lui assigner la donnée "Foundation" réglée sur 'true' :
    if(counter === 2) {newDiv.dataset.foundation = true}   // Chaque brique du milieu aura donc la forme : <div class="brick" id="brick-numéro" data-foundation="true"> numéro-de-la-brique </div>
    if(counter === 3) {counter = 0}     // On remet counter à 0 après qu'il a atteint 3.

    // J'ajoute la brique (c-à-d la section <div></div>) au corps du document HTML :
    document.body.appendChild(newDiv);  // Fonctionne aussi avec .append
}


function repair(...ids) {
    // Pour chaque ID rentré en paramètre...
    ids.forEach(id => {
        // ...je récupère la brique correspondant à l'ID :
        let brick = document.getElementById(id)
        // Si la brique se situe au milieu, on lui assigne la donnée "Repaired" réglée sur 'in progress' :
        if(brick.dataset.foundation) { brick.dataset.repaired = "in progress" }     // Bizaremment, la syntaxe if(brick.dataset.foundation === true) ne fonctionne pas...
        else { brick.dataset.repaired = "true" }
    })
}

function destroy() {
    let allBricks = document.getElementsByClassName("brick");
    let lastBrick = allBricks[allBricks.length - 1];

    // Je supprime la dernière brique :
    lastBrick.remove();
    // Fonctionne également : lastBrick.parentNode.removeChild(lastBrick)
    // Syntaxe pour supprimer un node : node.parentNode.removeChild(node)
}
