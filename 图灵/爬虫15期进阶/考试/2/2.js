var QI = Math.sign || function(t) {
    return (t = +t) == 0 || t != t ? t : t < 0 ? -1 : 1
}
console.log(QI)