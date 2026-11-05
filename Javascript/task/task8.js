// String palindrome checker withput using built-in functions
    let str="madam";
    let rev_str="";
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i];
    }
    if(str===rev_str){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
