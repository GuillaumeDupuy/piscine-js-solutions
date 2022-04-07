// Make a dayOfTheYear function that takes a date and returns the number of days since the first day of that year.

function dayOfTheYear(myDate)
{
    let start = new Date(myDate); // Je crée un clone 'start' à partir de 'myDate'.
    start.setMonth(0); // Je fixe le mois de 'start' à janvier.
    start.setDate(1); // Je fixe le jour de 'start' au 1er jour du mois, donc start est fixée au '01/01/XXXX'.
    let time = myDate - start; // Temps écoulé (en millisecondes) entre le 1er janvier et myDate.
    let days = time / 86400000 // Il y a 86 400 000 ms dans une journée.
    return Math.trunc(days + 1); // On ajoute 1 au résultat pour palier le cas où myDate serait déjà fixée au 1er janvier (car dans ce cas, time = 0 et days = 0). 
    // Par conséquent, on doit arrondir le résultat à l'unité inférieure.
}