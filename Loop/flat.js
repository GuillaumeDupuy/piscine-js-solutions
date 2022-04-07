function flat(arr, depth = 0) {
  let returnarr = [];
  let lvl = 0;
  while (arr.length) {
    const next = arr.shift();
    if (Array.isArray(next) && lvl <= depth) {
      arr.push(...next);
      lvl += 1;
    } else {
      returnarr.push(next);
    }
  }
  return returnarr;
}
