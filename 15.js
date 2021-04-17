let number = 100, sum = 0;

for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0){
        console.log(i);
    sum += i;
}
}

console.log(sum);