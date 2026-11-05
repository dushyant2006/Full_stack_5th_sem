
function guess_number(max, min) {
    let number = Math.floor(Math.random()*(max - min)+min);
    let user_input = document.getElementById("user_input").value;
    


    if (user_input == number) {
        document.getElementById("result").innerHTML = "right guess";
    } else {
        document.getElementById("result").innerHTML = "wrong guess, number --> " + number;
    }
}
