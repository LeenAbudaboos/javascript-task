
function tellFortune(jobTitle, Location, Name, number) {
    console.log('You will be a'+ jobTitle+ 'in' +Location+ 'and married to' +Name+ 'with '+number+ 'kids.');
  }
  
  tellFortune('software engineer', 'Jordan', 'Alice', 3);

  //Q2
  function calculateDogAge(age) {
    let Age = age * 7;
    console.log('Your doggie is ' +Age+ ' years old in dog years');
  }
  
  calculateDogAge(4);

  //Q3

  function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
    const totalAmount = yearsRemaining * 365 * amountPerDay;
    console.log('You will need  ' + totalAmount+ ' to last you until the ripe old age of  ' +maxAge);
  }
  
  calculateSupply(30, 3);

  //Q4
  function greet(name) {
    console.log("Hello  "+name)
    
  }
 greet("leen");

 //Q5

//what is the error:
function double(cat) {
  return 2 * cat;
}

function double() {
  return 2 * 7;
}

function double() {
  return 2 * 'x';
}

//Q6
function double1(x ){
    return 2 * x ;
  }
  
  function double2 (x){
  return 2 * x;
  }
  
  function double3(x)  {
    return 2 * x;
  }

  //Q7

function coub(x){
    let coub=x**3;
    console.log(coub);
}
coub(2);

//Q8

function multiply(x,y){
 let multiply=x*y;
 console.log(multiply);
}

multiply(2,7);

//Q9

function canIGetADrivingLicense(age){
  if(age>=20){
    console.log("yes you can")
  }
  else if(age<20){
    x=20-age;
    console.log(`please come back after ${x} years to get one`)
  }
};

canIGetADrivingLicense(16)
 

//Q10*******************************
function sameLength(str1,str2){
  if(str1.lenght==str2.lenght){
     return true;
  }else {
    return false;
  }

}
 console.log(sameLength("fkdy","jjcffffj"));


//Q11

function  largerNubmer(a,b){
  if(a>b){
    console.log(a);
  }
  else{
    console.log(b);
  }
  
}

largerNubmer(7,8);

//Q12

function smallerNubmer(a,b,c){
  if(a<b && a<c){
    console.log(a);
  }
  else if(b<a && b<c){
    console.log(b);
  }
  else{
    console.log(c);
  }
}

smallerNubmer(7,9,1)

//13***************************************
function shorterString(a,b,c,d,e){
  let strings = [a,b,c,d,e];
  let shorteststr = a ;

  for(i of strings){
      if(i.length < shorteststr.length){
          shorteststr = i ;
          console.log(i)
      }        
  }

}

shorterString("air","school","car","by","github");
//14********************************
function longerString(a,b,c,d,e){
  let strings = [a,b,c,d,e];
  let longerstr = a ;

  for(i of strings){
      if(i.length > longerstr.length){
          longerstr = i ;
          console.log(i)
      }        
  }

}

longerString("air","school","car","by","github");
//Q15

function isEven(x){
  if(x%2==0){
    console.log(true);
  }else{
    console.log(false);
  }
  
};

isEven(8);

//Q16

function isOdd(x){
  if(x%2!=0){
    console.log(true);
  }else{
    console.log(false);
  }
}

isOdd(1);


//Q17

function positive(x){
  if (x<0){
    console.log(x*-1)
  } else {
    console.log(x)
  }
}

positive(-6);

//Q18

function fullName(str1,str2){
  console.log(str1 +" " +str2)
}

fullName("leen","abudaboos");

//Q19

function average(a,b,c,d,e){
  let sum=a+b+c+d+e;
  avg=sum/5;
  console.log(avg);
}

average(5,7,9,3,5);

//Q20

function randomBetweenNumbers(){
  console.log(Math.random(0,1));

};

randomBetweenNumbers();

//Q21

function randomBetweenNumbers1(a,b){
  console.log(Math.random(a,b)* (b - a) + a);

};

randomBetweenNumbers1(3,7);

//Q22

function scoreInUniversty(x){
  if(x<=100 && x>=95){
    console.log("A");
  }else if(x<=94 && x>=85){
    console.log("B");
  }
  else if(x<=84 && x>=70){
    console.log("C");
  }else if(x<=69 && x>=50){
    console.log("D")
  }else{
    console.log("F");
  }
};
 
scoreInUniversty(55);


//Q23*************
function counter1(){
let x=0;
  
 console.log(++x) ;
 
}

counter1();

//Q24*************

function counter2() {
  let c = 0;
  let counter_Function = function() {
      return c++;
  };

  counter_Function.reset = function() {
      c = 0;
  };

  return counter_Function;
}

let c = counter2();
console.log(c()); 
console.log(c()); 
c.reset();
console.log(c());
