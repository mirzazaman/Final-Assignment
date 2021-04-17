let a = prompt("Enter any Alhabet");
let vowels = "aeiouAEIOU"

if (vowels.indexOf(a) !== -1){
    console.log(a , "is vowel");
}   else{
    console.log(a ,"is consonant");
}