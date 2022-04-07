function sameAmount(str, R1, R2) {
  let arr1 = [];
  let arr2 = [];
  arr1 = str.match(new RegExp(R1, "g"));
  arr2 = str.match(new RegExp(R2, "g"));
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false;
  }
  if (arr1.length === arr2.length) {
    return true;
  }
  return false;
}
