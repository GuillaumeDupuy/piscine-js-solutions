function nasa(N) {
  let str = "";
  for (let i = 1; i < N + 1; i++) {
    if (i % 3 == 0) {
      str += "NA";
    } if (i % 5 == 0) {
      str += "SA";
    } if (i % 3 !== 0 && i % 5 !== 0) {
      str += i;
    } if (i != N) {
      str += " ";
    }
  }
  return str;
}