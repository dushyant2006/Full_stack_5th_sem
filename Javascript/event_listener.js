// how much time button is clicked
let btn =
document.getElementById("btn");
btn.addEventListener('click', ()=>{
    console.log("Button Clicked!");
    let counterValue = document.getElementById("counterValue");
    counterValue.innerHTML = parseInt(counterValue.innerHTML) + 1;


});
