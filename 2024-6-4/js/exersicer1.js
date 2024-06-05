
//Q.1
function sum(n1,n2){
if(n1>n2){
    console.log(n1 +"  larger  " +n2);
}else{
    console.log(n2 +"  larger  " +n1);
}

}

sum(1,2);

console.log("*****************************************")

//Q.2

function Q2(n1){
    let x=n1;
    if(x<0){
        console.log("The sign is -");
    }
    else{
        concole.log("The sign is +") ;
    }
    
    }

Q2(3, -7, 2 );

console.log("*****************************************")
//Q3
function comparison(x,y,z){
    
    if(x>y && x>z){
        if (y>z)
            {
                console.log(x + ", " + y + "," +z);
            }
            else
            {
                console.log(x + "," + z + "," +y);
            }
    }

      if(y>x && y>z){
        if (z>y)
            {
                console.log(y + "," + z + "," +x);
            }
            else
            {
                console.log(y + "," + x + "," +z);
            }
    }

    else if (z>x && z>y)
        {
                if (x>y)
                {
                    console.log(z + ", " + x + ", " +y);
                }
                else
                {
                    console.log(z + ", " + y + ", " +x);
                }
        }  
    
    
    }

    comparison(0,4,-1);
    console.log("*****************************************")
//Q4
let a =-5;
let b =-2;
let c=-6;
let d=0;
let e =-1;
if (a>b && a>c && a>d && a>e){
    console.log("largest number "+a);
}
if (b>a && b>c && b>d && b>e){
    console.log("largest number "+b);
}
if (c>b && c>a && c>d && c>e){
    console.log("largest number "+c);
}
if (d>b && d>c && d>a && d>e){
    console.log("largest number "+d);
}
else{
    console.log("largest number "+e)
}


console.log("*****************************************")
//Q5
function Q5(x,y){
    while(x>y){
        console.log( "Hello World");
    }
    console.log("Goodbye");
}

Q5(5,7);

console.log("*****************************************")