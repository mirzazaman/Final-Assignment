let str = "My name is Zaman.";

console.log(str);

toggle(str);

// Main Function

function toggle(str){

let val = str.split(" ") ;

let main = val.map(function (val){

let one = val.slice(0,1).toLowerCase();
let etc = val.slice(1).toUpperCase();

let result = one+etc;
return result;
    });

let solution = main.join(" ")

console.log(solution);

}

