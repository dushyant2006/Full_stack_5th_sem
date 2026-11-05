// wap to convert user entered number by html box into binary and hexadecimal 
function convertNumber() {
    const number=document.getElementById("number").value;
    const binary=number.toString(2);
    const hexadecimal=number.toString(16);
    document.getElementById("binary").innerHTML=binary;
    document.getElementById("hexadecimal").innerHTML=hexadecimal;

}