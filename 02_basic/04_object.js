const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
console.log(obj3);

const course ={
    coursename: 'js in hindi',
    price:'9999',
    instructor:'gbfh'
}
const {coursename : name}= course
// console.log(coursename);
console.log(name);




