

let enObj = A7; //这里的TT需要修改


let deObj = new Object();


for (let key of Object.keys(enObj)) {
    try {
        deObj[key] = enObj[key].apply(null,);
    } catch { }
}
console.log(deObj)
copy(JSON.stringify(deObj))




