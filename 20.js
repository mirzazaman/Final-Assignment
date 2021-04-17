let a=9, b=7, c=6;
let result;
console.log("a =", a, "b =", b, "c =", c);

if(a > b && a > c){
    result = a;
}
else if (b > a && b > c) {
    result = b
}
else {
    result = c
}

console.log("Greater number is", result);