let str = "This is a String";
console.log(str);

result(str);

function result(str){
let vowels   = ('aeiouAEIOU');
let count = 0;
  
for(let i = 0; i < str.length ; i++)
{
  if (vowels.indexOf(str[i]) !== -1)
  { count++; }
  
}
let consonants = str.length - count ;
console.log("Vowels",count);
console.log("Consonants",consonants);

}