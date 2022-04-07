/* Create the following functions:

    isFriday returns true if the date is a friday
    isWeekend returns true if the date is a day of the weekend
    isLeapYear returns true if the year is a leap year
    isLastDayOfMonth returns true if the date is the last day of the month      */

const isFriday = (myDate) =>
{
    // Renvoie true si le jour est un vendredi :
    return myDate.getDay() === 5;
}

const isWeekend = (myDate) =>
{
    // Renvoie true si le jour est un samedi ou un dimanche :
    return myDate.getDay() === 6 || myDate.getDay() === 0;
}

const isLeapYear = (myDate) =>
{
    // Je crée une nouvelle date leapYear qui reprend l'année du paramètre myDate, mais je la fixe au 29 février :
    let leapYear = new Date(myDate.getFullYear(), 1, 29); // le mois de février possède l'indice 1 (0 ~ 11)

    // Renvoie true si le jour de leapYear est bien le 29 (dans ce cas, l'année est bien bissextile).
    // Si l'année n'est pas bissextile, la date passera automatiquement au 1er mars et on renverra false.
    return leapYear.getDate() === 29;
}

const isLastDayOfMonth = (myDate) =>
{
    // Je règle le jour de myDate sur le jour suivant (myDate.getDate() + 1). Si ce jour est le 1er du mois, alors on était bien au dernier jour du mois :
    myDate.setDate(myDate.getDate() + 1);
    return myDate.getDate() === 1;
}

