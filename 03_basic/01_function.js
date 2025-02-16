function loginuser(username){
    if(!username){
        console.log('please enter a username');
         return
    }
    return `${username} just logged in`
}
console.log(loginuser('ttf'));


function calculateprice(...num)
{
    return num
}
console.log(calculateprice(200,400,500));

const user ={
    username:'hfvef',
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username:'sam',
    price:399
})

