function findExpression(num, result = 1, str = "1") {
  if (result > num) return undefined;
  if (num === result) return str;
  return (num - result) % 4 != 0
    ? findExpression(num, result * 2, (str += ` ${mul2}`))
    : findExpression(num, result + 4, (str += ` ${add4}`));
}
