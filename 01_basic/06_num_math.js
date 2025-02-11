const score = 400

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const othernumber=2335.8366
console.log(othernumber.toPrecision(3));

const hundered =1000000
console.log(hundered.toLocaleString('en-IN'));

// math
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,6,7,3));
console.log(Math.max(4,6,73,2,));
console.log((Math.random()*10)+1);

const min=20
const max=30
// math.random()*(max-min+1)
console.log(Math.floor(Math.random()*(max-min+1))+min);



