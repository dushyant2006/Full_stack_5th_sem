let arr = [1,2,3,4,5];
console.log(arr);

arr.push(6);  // push adds an element to the end of the array
console.log(arr);

arr.unshift(0); // unshift adds an element to the beginning of the array
console.log(arr);

arr.pop();    // pop removes the last element from the array
console.log(arr);

arr.shift();  // shift removes the first element from the array
console.log(arr);
     
arr.foo = "hello"; // adding a property to the array
console.log(arr); // accessing the property of the array
