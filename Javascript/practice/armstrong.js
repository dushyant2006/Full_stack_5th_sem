function isArmstrong(n) {
    let temp = n;
    let sum = 0;
    let digits = n.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === n;
}

let n = parseInt(prompt("Enter a number:"));

if (isArmstrong(n)) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}