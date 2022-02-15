module.exports = function reverse (n) {
    let revM = -n;
    let revMinus = revM.toString().split("").reverse().join("");

        if(+n < revMinus) return Number(revMinus);

    let revN = n.toString().split("").reverse().join("");
    let revNol = Number(revN);
        if(n % 2 == 0) return revNol;
    let rev = n.toString().split("").reverse().join("");
        if(n) return Number(rev);
}
