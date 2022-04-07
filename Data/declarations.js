const escapeStr = "` \\ / \" '"
const arr = [4, '2']
const obj = {
    str: "cc",
    num: 2,
    bool: true,
    undef: undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: "",
        num: 0,
        bool: false
    }
};

Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);