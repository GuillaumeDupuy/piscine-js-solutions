/* You were missioned to make the world more productive.
Your solution ? No more sundays! You are asked to remove them from the existing calendar.
So now, a week is 6 days from monday to saturday. To prove your point, 
create a bloodySunday function that returns what week day the given date is.
Note that the 01/01/0001 is still a monday.     */


function bloodySunday(myDate)
{
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let start = new Date("0001-01-01");
    let n = Math.ceil(((myDate - start) / 86400000) % 6);
    
    return weekDays[n];
}