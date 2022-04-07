function addWeek(myDate) {
  const weekDayNum = myDate.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const first = new Date("0001-01-01");
  const week = Math.ceil((myDate - first + 1) / 86400000 / 7);
  if (week % 2 != 0) {
    return weekDays[weekDayNum];
  } else {
    return "second" + weekDays[weekDayNum];
  }
}

function timeTravel({ date, hour, minute, second }) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  return new Date(year, month, day, hour, minute, second);
}
