let alpha = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];

console.log(remDubl(alpha));

function remDubl(alpha) {
    return alpha.filter((value,index) => alpha.indexOf(value) === index);
}