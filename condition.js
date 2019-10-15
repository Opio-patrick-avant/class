// let num1=20,num2=40;
// if (num1>num2)
// {
//  console.log('You have passed')
// }
// esle
// {
// console.log('heaven is not for you!')
// }

// let paye=(sal)=>
// {
//     if
//     (sal>=130000)
//     {let payee=sal*(30/100)
//     console.log(payee)
//     return payee;}


// else
// {
// console.log('pleas  enjoy  your  salary wisely')
// }
// }

// paye(160000);


// 2 employees compares 
// who getes 
// greater than for  the paye

let PAYE=(sal1,sal2)=>
{
      let paye1=sal1*(30/100)
      let paye2=sal2*(30/100)
      
       if (paye1>paye2)
          {
    console.log('Highly paid')
          } 
          else {
         console.log('low paye')    
           }
}
PAYE(10000,100000);
// i  am happy  this  the  code  that  i  struggled  and got  it right 


// check  the  assignment in 
let compute = (sal1,sal2)=>
{
   if(sal1>=130000 && sal2>=130000)
     {   
let payee1= sal1*(30/100)
let payee2 = sal2*(30/100)
let comp= (payee1>payee2?sal1:sal2)
console.log('the  higlhest taxable pay is:\t+comp')
     }
}
