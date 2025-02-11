const marvel= ['thor','ironman','spiderman']
const dc=['superman','flash','batman']
// marvel.push(dc)

//  console.log(marvel);
//  console.log(marvel[3][1]);

//const newheros=marvel.concat(dc)
//console.log(newheros);

const all_new_hero =[...marvel,...dc]
//console.log(all_new_hero);

const another_arr= [1,2,3,[4,5,6,[7,8,[5,6]]]]
const real_another_arr =another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("raj"));
console.log(Array.from('afha'));
console.log(Array.from({name:'afha'}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));








 