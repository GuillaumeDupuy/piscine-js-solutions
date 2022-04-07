// Make a countLeapYears function that takes a date and returns the number of leap years since year 1.

function countLeapYears(myDate)
{
    let end = myDate.getFullYear();
    let count = 0;

    for(let year = 1; year < end; year++)
    {
        var newDate = new Date(year, 1, 29); // Je crée une date '29 février XXXX'
        if(newDate.getDate() === 29) {count++} // Si le jour est bien fixé au 29, alors c'est une année bissextile et j'incrémente le compteur.
    }
    return count;
}

// console.log(countLeapYears(new Date));
// > 490 (il y a eu 490 années bissextiles depuis l'an 1)