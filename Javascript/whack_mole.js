
function start(){
    setInterval(randomSelect, 600);
}
function randomSelect(){
    let random = Math.floor(Math.random() *8) +1;
    let btn= document.getElementById(random.toString());
    let span = btn.querySelector("span");
    span.classList.toggle("hide");
    setTimeout(()=>{
        span.classList.toggle("hide");
    }, 500);

}
start();
let btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let btnid = e.currentTarget.getAttribute("id");
        if(btnid == random){
            score++;
            console.log("score: ", score);
        }
    })   
});