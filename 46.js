let arry = [-2, 5, -6, -8, 4, -1, -3, -7, 4, -9];

let result = count(arry)

console.log("Negtive numbers are", result);

function count(arry) {
    var count = 0;
    arry.forEach( function (a) {
      if (a < 0)
        count++;
    });
    return count;
}