let arrToSet = (arr) => {
    let set = new Set
    for(let i = 0;i<arr.length;i++){
        set.add(arr[i])
    }
    return set
}
let arrToStr = (arr) => {
    return arr.join("")
}
let setToArr = (set) => {
    let arr = []
    for (const item of set) {
        arr.push(item)
    }
    return arr
}
let setToStr = (set) => {
    return arrToStr(setToArr(set))
}
let strToArr = (s) => {
    return s.split("")
}
let strToSet = (s) => {
    return arrToSet(strToArr(s))
}
function mapToObj(map) {
    let obj = {};
    for (let key of map.keys()) {
      obj[key] = map.get(key);
    }
    return obj;
}
let objToArr = (obj) => {
    let arr = [];
    for (let key in obj) {
      arr.push(obj[key]);
    }
    return arr;
}
let objToMap = (obj) => {
    let map = new Map
    for (let key in obj) {
        map.set(key, obj[key])
      }
    return map
} 
let arrToObj = (arr) => {
    let obj = {}
    for(let i = 0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
let strToObj = (s) => {
    return arrToObj(strToArr(s))
}
let superTypeOf = (arg) => {
    switch (typeof arg) {
      case "number":
        return "Number";
      case "string":
        return "String";
      case "boolean":
        return "Boolean";
      case "undefined":
        return "undefined";
      case "object":
        if (arg instanceof Array) {
          return "Array";
        }
        if (arg instanceof Set) {
          return "Set";
        }
        if (arg instanceof Map) {
          return "Map";
        }
        if (arg === null) {
          return "null";
        }
        return "Object";
      case "function":
        return "Function";
      default:
        return typeof arg;
    }
}