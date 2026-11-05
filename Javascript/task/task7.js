// Create a function that takes heigtht and width of a rectangle amd returns the area
function area_rectangle(){
    let height=document.getElementById("height").value;
    let width=document.getElementById("width").value;
    let area=height*width;
    console.log("the area of rectangle is:"+area);
    return area;
}