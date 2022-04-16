// 👑 Énoncé :

// « You've been attributed the task to find the main architect of the Tower of Pisa before he achieves his plans,
// avoiding us nowadays all those lame pictures of people pretending to stop it from falling.

// You arrive at the architects' chamber to find him, but all you have in front of you is a bunch of unknown people.
// Step by step, with the little information you have, gather information and figure out by elimination who he is.

// Launch the provided HTML file in the browser to begin your investigation. On top of the webpage, each of the four buttons fires a function. »

// 👑 From now on, don't forget to export all the expected functions, so that they can be imported to be tested:

export { getArchitects, getClassical, getActive, getBonannoPisano }

// 1️⃣ Write the body of the getArchitects function, which returns an array containing 2 arrays:
//     - the first array contains the architects, all corresponding to a <a> tag,
//     - the second array contains all the non-architects people.

function getArchitects() 
{
    let result = [];
    result.push(Array.from(document.getElementsByTagName("a")));
    result.push(Array.from(document.getElementsByTagName("span")));
    // Array.from(...) crée un tableau à partir d'un objet itérable (string, nodeList, HTMLCollection, etc.)
    // document.getElementsByTagName(myTag) renvoie une collection d'éléments dont le tag correspond à myTag.

    return result;
}



// 2️⃣ Write the body of the getClassical function, which returns an array containing 2 arrays:
//     - the first array contains the architects belonging to the classical class,
//     - the second array contains the non-classical architects.

function getClassical()
{
    let result = [];
    result.push(Array.from(document.querySelectorAll("a.classical")));
    result.push(Array.from(document.querySelectorAll("a:not(.classical)")));

    return result;
}



// 3️⃣ Write the body of the getActive function, which returns an array containing 2 arrays:
//     - the first array contains the classical architects who are active in their class,
//     - the second array contains the non-active classical architects.

function getActive()
{
    let result = [];
    result.push(Array.from(document.getElementsByClassName("classical active")));
    result.push(Array.from(document.querySelectorAll(".classical:not(.active)")));

    return result;

}



// 4️⃣ Write the body of the getBonannoPisano function, which returns an array containing:
//     - the HTML element of the architect you're looking for, whose id is BonannoPisano,
//     - an array which contains all the remaining active classical architects.

function getBonannoPisano()
{
    let result = [];
    result.push(document.getElementById("BonannoPisano"));
    result.push(Array.from(document.querySelectorAll("a.classical.active:not(#BonannoPisano)")));

    return result;
}