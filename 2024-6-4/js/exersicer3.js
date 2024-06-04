//Q1
for(let i=1; i<=10;i++){
    console.log(i);
}
console.log("*****************************************");
//Q2
var arr = [13,23,12,45,22,48,66,100];

for(let i =0 ;i<arr.length;i++){
    if(arr[i]%2==0 ){
        console.log(arr[i])
    }
}

console.log("*****************************************");
//Q3

for(let i=1 ;i<= 8;i++){
    let cont="";
    for(let x=1 ;x<= i;x++){
        cont +=x;
    }
    console.log(cont );
}

console.log("*****************************************");
//Q4
let x = "don’t know why";
if(x.includes("y")){
    console.log("yes");
}
else{
    console.log("no");
}

