// print fizz if a number is divisible by 3, buzz if it is divisible by 5, and fizzbuzz if it is divisible by both
let number=15;
if(number%3===0 && number%5===0){
    console.log("FizzBuzz");
}
else if(number%3===0){
    console.log("Fizz");
}
else{
    console.log("Buzz");
}