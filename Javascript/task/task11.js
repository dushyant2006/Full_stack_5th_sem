/*
map>> transform each element of an array and return the new array with same no of elements
filter >> filter the elements of an array based on a condition and return the new array with less no of elements
find >> find the first element of an array that satisfies a condition and return that element

let arr=[1, 2, 3, 4];
console.log(arr.map(num=>num*num*num));
console.log(arr.filter(num=>num%2!=0));
console.log(arr.find(num=>num>2));
console.log(arr.find(num=>num>5));
console.log(arr.reduce((sum, num)=>sum+num,0));
*/

// wap to use reduce method to an array of item price to calculate total sum
let price=[100, 200, 300, 400, 500];
console.log(price.reduce((sum, num)=>sum+num, 0));