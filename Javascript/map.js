let arr= [1, 2, 3, 4, 5];
console.log(arr);

let nArr=arr.map((n)=> {return n**4;});
console.log(nArr);


nArr=arr.filter(n => n>3);
console.log(nArr);

nArr = arr.find( n => n>1);
console.log(nArr);

nArr = arr.reduce((sum , n)=> sum+=n, 0);
console.log(nArr);