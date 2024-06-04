//Q1
let x = 250 ;
const z=0.025;
let zcat=x*z;
console.log(zcat);


//Q1

let arr=[ 1,7 , 9 , 45, ]; //No variable was assigned to the array

let arr1= ["Str", "alex","moh", 'the','fox' , 'over', "lazy", 'dog' ];//No variable was assigned to the array


//Q2

var fruits=["Tomato","Banana","Watermelon"];

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Tomato"));

//Q3

let Favorite=[["meat,kabab"],["walking","jogging","swimming"],["milk seller","harry pottre"]];

console.log(Favorite[0]);
console.log(Favorite[1]);
console.log(Favorite[2]);

//Q4

let array =[1,4,5];
let firstOfArray=array[0];
console.log(firstOfArray);
 
let array1 =["t","u","g","x"];
let firstOfArray1=array1[0];
console.log(firstOfArray1);

//Q5

let array2 =[1,4,5];
let lastOfArray=array2[2];
console.log(lastOfArray);
 
let array3 =["t","u","g","x"];
let lastOfArray1=array3[3];
console.log(lastOfArray1);

//Q6
//[1,3,4,6,8,9,10]
let array5=[0,5,7,9];
array5.shift();
array5.shift();
array5.shift();
array5.unshift(8)
array5.unshift(6)
array5.unshift(4)
array5.unshift(3)
array5.unshift(1)
array5.push(10)
console.log(array5)

//Q7

var array6 = [5,9,-7,3.5]

console.log(array6)
//Add a new element to the end of the array
array6.push(1)
console.log(array6)
//Add a new element to the beginning of the array
array6.unshift(8)
console.log(array6)
//Delete the last element in the array
array6.pop()
console.log(array6)
//Delete the first element in the array
array6.shift()
console.log(array6)

//Q8
var ar = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(ar.sort(function(a, b){return a - b}))
