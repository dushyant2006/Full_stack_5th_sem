let price = 100 , quantity;
let total = price*Number.parseInt(quantity ?? 1);
console.log(total);

let obj ={
    name: "John",
    location : {
        city: "Mathura", 
        state: "UP"
    }
};
console.log(obj.location.state??="UP");
console.log(obj);

console.group("inner Text : ",
    document.getElementById("p").innerText
);

console.log("Text conteent:",
    document.getElementById("p").textContent
);