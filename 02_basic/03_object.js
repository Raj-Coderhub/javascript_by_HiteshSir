const mysum = Symbol('key1')

const jsuser ={

    name:'raj',
    'fullname':'efnve fejf',
    [mysum]:'mykey2',
    
    age:18,
    location:'america',
    email:'raj"email.com',
    isloggedIn:false,
    lastlogin:['monday','monday']
}

Object.freeze(jsuser)
//console.log(jsuser.email);
console.log(jsuser.fullname);
console.log(jsuser['email']);
console.log(jsuser[mysum]);
console.log(jsuser.mysum);

console.log(typeof [mysum]);  //not symbol
console.log(typeof mysum);  //that symbol

console.log(jsuser);




