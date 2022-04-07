/* Create a function called matchCron it takes a valid cron schedule string and a valid date.
It returns true if the date matches the pattern.

    You only have to implement numbers and *.
    Other complex patterns are not required.

Only valid pattern will be tested.  

Example :

matchCron('9 * * * *', new Date('2020-05-30 18:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:09:00')) // -> true
matchCron('9 * * * *', new Date('2020-05-30 19:21:00')) // -> false
//         | | | | |
//         | | | | +- Day of the Week   (range: 1-7, 1 standing for Monday)
//         | | | +--- Month of the Year (range: 1-12)
//         | | +----- Day of the Month  (range: 1-31)
//         | +------- Hour              (range: 0-23)
//         +--------- Minute            (range: 0-59)

*/

function matchCron(myCron, myDate)
{
    // Je crée un tableau à partir de myCron :
    let arr = myCron.split(" ");

    function objMaker(minute, hour, date, month, day)
    {
        this.minute = minute;
        this.hour = hour;
        this.date = date;
        this.month = month;
        this.day = day;
    }

    // Je transforme arr (qui contient les valeurs de myCron) en objet :
    let myCronObj = new objMaker(arr[0], arr[1], arr[2], arr[3], arr[4]);
    // Par exemple, myCronObj = { minute: '9', hour: '*', date: '*', month: '*', day: '*' }


    // Je transforme myDate en objet :
    let myDateObj = new objMaker(myDate.getMinutes(), myDate.getHours(), myDate.getDate(), myDate.getMonth()+1, myDate.getDay());
    // Par exemple, myDateObj = { minute: 42, hour: 11, date: 9, month: 2, day: 2 }

    // Dans la syntaxe Cron, les jours vont de 1 à 7 (à partir du lundi), alors que la syntaxe de .getDay() numérote les jours de 0 à 6 (à partir du dimanche). 
    // Donc si .getDay() renvoie 0, cela signifie que c'est dimanche, donc on le transforme en 7 pour l'adapter à la syntaxe de Cron :
    if(myDateObj.day == 0){myDateObj.day = 7;}

    // Je compare myCronObj avec myDateObj. Si chacune des valeurs des deux objets ne correspondent pas (et que la valeur de myCronObj n'est pas une '*'), alors on renvoie false :
    for(const property in myCronObj)
    {
        if(myCronObj[property] != '*' && myCronObj[property] != myDateObj[property])
        {
            return false
        }
    }
    return true;

}