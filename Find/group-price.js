/* Create a groupPrice function, that can find a price in a given string.
The function has to return an array of arrays with the full match of the price ($43.99)
and the groups of that price, the first group(43) and the second group (99).
If there is no match the function returns an empty array.
Example: "The price is USD12.31"
Expected output: [["USD12.31","12","31"]] 
*/

function groupPrice(myString)
{
    let regex = /\$[0-9]*\.[0-9]*|USD[0-9]*\.[0-9]*/gi;    // On pourrait aussi écrire regex = /\$[0-9\.]*|USD[0-9\.]*/gi;
    let arr = myString.match(regex);                       // Par exemple, arr = ['USD1.81', '$5.0']
    if(arr === null){return []}                            // Si l'array est null (la string ne contient aucun prix), on renvoie directement un array vide ([]).


    // Je range chacun des éléments de arr dans des sous-tableaux imbriqués dans un tableau plus grand "result" :
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        let tmp = [];          // tmp = []
        tmp.push(arr[i]);      // tmp = ['USD1.81']
        result.push(tmp);      // result = [ ['USD1.81] ]  --->  après 2 tours : result = [ ['USD1.81'], ['$5.0'] ]
    }

    let regUnit = /[0-9]*(?=\.)/g;      // Récupère l'unité du prix (nombre précédant le point).
    let regDecim = /(?<=\.)[0-9]*/g;    // Récupère les décimales du prix (chiffres suivant le point).

    for(let i = 0; i < result.length; i++)
    {
        let unit = result[i][0].match(regUnit);         // unit = ['1']
        let decim = result[i][0].match(regDecim);       // decim = ['81']
        result[i].push(unit[0]);                        // result = [ ['USD1.81', '1'], ['$5.0'] ]
        result[i].push(decim[0]);                       // result = [ ['USD1.81', '1', '81'], ['$5.0'] ]  --->  après 2 tours : result = [ ['USD1.81', '1', '81'], ['$5.0', '5', '0'] ]
    }
    return result;
}

/* Exemple :

console.log(groupPrice("The prices are USD1.81 and $5.0"));
> [ [ 'USD1.81', '1', '81' ],  [ '$5.0', '5', '0' ] ]

*/
