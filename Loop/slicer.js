function slice(obj, start, end=(obj.length)){
    let st = 0
    let ed = 0
    if(start < 0){
        st = obj.length + start
    } else {
        st = start
    }
    if(end < 0){
        ed = obj.length + end
    }else {
        ed = end
    }
    if(typeof obj === "string"){
        let str = ''
        for(let i=st; i<ed; i++){
            str += obj[i]
        }
        return str
    } else {
        let arr = []
        for(let i=st; i<ed; i++) {
            arr.push(obj[i])
        }
        return arr
    }
}