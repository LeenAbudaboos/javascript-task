let text1=document.getElementById("text1");

text1.addEventListener('mouseover',myfunction);
text1.addEventListener('mouseout',myfunctionout);

function myfunction(){
    document.getElementById("text1").innerHTML = "Hello World!";
}

function myfunctionout(){
    document.getElementById("text1").innerHTML = "Can i help you!";
}