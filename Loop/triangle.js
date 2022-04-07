function triangle(str, n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      result += str;
    }
    if (i === n) {
      return result;
    } else {
      result += "\n";
    }
  }
  return result;
}
