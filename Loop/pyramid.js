function pyramid(str, n) {
  let res = "";
  let currentLine = 1;
  for (let i = 1; i <= n; i++) {
    res += " ".repeat(n - i).repeat(str.length);
    res += str.repeat(i * 2 - 1);
    if (i === n) {
      return res;
    }
    res += "\n";
  }

  return res;
}
