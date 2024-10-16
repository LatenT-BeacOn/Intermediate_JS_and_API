// map->loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns the array;


//make double;
const numbers=[1,2,3];

// function doubleIT(num){
//     return num*2;
// }
// const result=numbers.map(doubleIT)
// console.log(result);



// const double2=x=>x*2;
// console.log(numbers.map(double2));
//console.log(numbers.map(x=>x*2));
//console.log(numbers.map(x=>x*2));



// const numbers=[1,2,3];
// const doubled=[];
// for(const num of numbers){
//     const double=num*2;
//     doubled.push(double);
// }
// console.log(doubled);





// more map;

const friends=['tom','mona','jeri','ikkri'];
const length=friends.map(friend=>friend.length);
console.log(length);
const firstLetter=friends.map(friend=>friend[0]);
console.log(firstLetter);