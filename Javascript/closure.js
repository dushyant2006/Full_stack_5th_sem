// clousre means function inside function
// clousre provides encapsulation and data privacy
/*
function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    inner();
}
outer();
outer();
outer();
*/
function outer(){
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }
    return { increment };
}
const counter = outer();
counter.increment();
counter.increment();
counter.increment();

