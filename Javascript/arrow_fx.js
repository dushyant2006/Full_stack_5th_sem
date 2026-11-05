const sum = ((a, b)=> a+b);
console.log(sum(20,122));
function isArmstrong(num){
    let sum =0;
    let temp=num;
    while(temp>0){
        let rem=temp%10;
        sum+=rem*rem*rem;
        temp=Math.floor(temp/10);
    }
    console.log(sum);
}