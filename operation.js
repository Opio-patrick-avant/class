let a=20,b=30
c= a+b
console.log(c)
// // using *
let m=a*b
console.log(m)
let x = b/a
console.log(x)

// //using -
let w=b-a
console.log(w)


let z=c++
console.log(z)
// //after running  this  code  there  is  no change 
// // so  u  need to  try  this code

// //try this  and then check  if  there is  achange 
let u=++c
console.log(u)
// //there  is  achange 

// //try -- before c
let t=--c
console.log(t)

// // //tr-- after c
let p=c--
console.log(p)

// ///  sometime  we  need  to add more  than 1 
// // or  even subtract   than 1
// /// example 
let q=c+=2  //it means  c=c+2
console.log(q)

// //modulus sign consider  the  remainder  
// //let try  this 
let sum=20
let sub =50
let add=sum % sub
console.log(add)

// //and even  this
let add2=sub%sum
console.log(add2)
// // LOGICAL OPERATORS
// //other operators logiucal  AND (&&)  and  logical OR(||)
// //   && AND ,|| OR
// //   ==
var k=4,k2='4';
var k3=k==k2;
// //   ===
var k4=k===k2;

// // logical grouping  of  interelated  element  to  come  up  with  a funchion
function opio()
{
    let num1=200;
    let num2=100;
    let num3=num1+num2;
    return num3
   console.log(num3)
 }
opio();


// //tis  is  what  we all function calling...or  function invocation
function pato() {
   let pat=opio()-200;
   console.log(pat);
}
pato()

//try  to  do  this  again  and  again  until  u  understand  because its 

//IF  U  CAN  DO  THIS  VERY  WELL ITS  LIKE U  R IN  THE  3RD YEAR WITH IT IN MAKERE


///ASSIGNMENT 
//Define  three functions 
//first  function  should  add 3 numbers (30,60,100)
//second  should  get  the  result  from  first  function  and  multiply  by  2
//third function  get  result from  funtion 2 and  get  remainder after  divide  by 15


//ASSIGNMENT

//First function
function first()     
{   let a=30;
    let b=60;
    let c=100;
    let d=a+b+c;
    console.log(d)
    return d;
}
first();

//Second function
function second()
{
let second=first()*2;
console.log( '',second);
return second;
}
second ();

//third function.....mudulus means  the remainder 
function third()
{
    let third=second()%15;
    console.log('adwogi',third);
    return third;
}
third ();

//application of parameters






