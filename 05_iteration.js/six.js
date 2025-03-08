const coding =["js","ruby","java","python","cpp"]

const aa= coding.forEach((item) =>{
   //console.log(item);
})

// console.log(aa);

const mynum =[1,2,3,4,5,6,7,8,9,10]

const filter1 = mynum.filter((num)=>{ 
   return num >4
 }
)
console.log(filter1);

const mynumbers =[1,2,3,4,5,6,7,8,9]

 const newNums = mynumbers.map((num)=> num +10)

//  console.log(newNums);

const newnum = mynumbers.map((num)=>num * 10).map((num)=>num+1).filter((num)=>num>=40)

console.log(newnum);

//reduce()

const num1 =[1,2,3,4,5,6,7,8,9]
const storenum1 = num1.reduce((acc,num)=>{
    console.log(`${acc} + ${num}`);
    
    return acc + num
},5)
console.log(storenum1);





 



