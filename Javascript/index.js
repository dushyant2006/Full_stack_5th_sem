var objArr = [];
function addObject(){
    let movie = document.getElementById("val1").value;
    let rating = document.getElementById("val2").value;
var obj={
    movie:movie,
    rating:rating
}
    objArr.push(obj);
    console.log(objArr);

}

function updateMovie(){
    for(var i=0;i<objArr.length;i++){
        var searchMovie = document.getElementById("val3").value;
        var newRating = document.getElementById("val4").value;
        if(objArr[i].movie==searchMovie){
            objArr[i].rating=newRating;
        }
    }
    console.log(objArr);
    
}