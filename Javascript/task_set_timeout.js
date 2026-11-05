// wap using setTimeout, setinterval and getElementby ID to create a timer for 15 min
let time=60*15;
setInterval(()=>{
    time-=1;
    updateTimer();

},1000);
function updateTimer(){
    let sec=time%60;
    let min=Math.floor(time/60);
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;

}

function resetTimer(){
    time=60*15;
    updateTimer();
}
function stopTimer(){
    clearInterval();

}
