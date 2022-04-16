// Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills: one of those Monoyer charts that ophthalmologists use.
// Generate a board where each new letter is harder, bigger, bolder and stronger!
// Write the function generateLetters which creates 120 div, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:
//     - each letter font-size has to grow from 11 to 130 pixels,
//     - font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.

export { generateLetters }

function generateLetters() 
{
    const number = 120;     // Nombre de lettres à créer.
    const tier2 = number * (1/3);   // Indice de début du 2ème tier (40).
    const tier3 = number * (2/3);   // Indice de début du 3ème tier (80).

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 1; i <= number; i++)
    {
        let randomLetter = alphabet[Math.ceil(Math.random() * 25)];

        let newDiv = document.createElement("div");

        // Contenu texte de newDiv :
        newDiv.textContent = randomLetter;

        // Taille du texte de newDiv :
        newDiv.style.fontSize = `${i+10}px`;     // La taille de la police commence à 11 et augmente de 1 à chaque tour, jusqu'à atteindre 130.

        // Épaisseur du texte de newDiv :
        if(i <= tier2) {newDiv.style.fontWeight = 300}                  // 1er tier.
        if(i > tier2 && i <= tier3) {newDiv.style.fontWeight = 400}     // 2ème tier.
        if(i > tier3) {newDiv.style.fontWeight = 600}                   // 3ème tier.

        // J'ajoute newDiv au document HTML :
        document.body.appendChild(newDiv);
    }
}

