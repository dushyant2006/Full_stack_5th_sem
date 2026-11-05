
function rock_paper(user, cpu){
    cpu=choice[Math.floor(Math.random()*choice.length)];
    let user=document.getElementById("user_input").value;
    if(user==cpu){
        document.getElementById("result").innerHTML="no winner";
    }
 else if(user=="rock" &&cpu=="scissor"){
        document.getElementById("result").innerHTML="user wins";
    }
    else if(user=="scissor"   && cpu=="paper"){
        document.getElementById("result").innerHTML="user wins";
    }
    else if(user=="paper" &&cpu=="rock"){
         document.getElementById("result").innerHTML="user wins";
    }
    else{
        document.getElementById("result").innerHTML="cpu wins"
    }
}