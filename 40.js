let a = "b";

check(a)

function check(a){
    let vowels = "aeiouAEIOU";

    switch (a) {
        case "a":
            console.log("a is vowel");
            break;
        case "e":
            console.log("e is vowel");
            break;
        case "i":
            console.log("i is vowel");
            break;
        case "o":
            console.log("o is vowel");
            break;
        case "u":
            console.log("u is vowel");
            break;
        case "A":
            console.log("A is vowel");
            break;
        case "E":
            console.log("E is vowel");
            break;
        case "I":
            console.log("I is vowel");
            break;
        case "O":
            console.log("O is vowel");
            break;
        case "U":
            console.log("U is vowel");
            break;
        default:
            console.log(a , "is Consonant");
            break;
    }
}