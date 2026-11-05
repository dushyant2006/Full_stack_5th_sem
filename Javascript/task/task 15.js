// write a function that iterate through string and log count of vowels
function countVowels(str) {
    let count = 0;
    for(let i=0; i<str.length;i++){
        if(str[i].toLowerCase()==='a' || str[i].toLowerCase()==='e' || str[i].toLowerCase()==='i' || str[i].toLowerCase()==='o' || str[i].toLowerCase()==='u'){
            count++;
        }

    }
    console.log("The number of vowels in the string is: " + count);
}
countVowels("Hello World");