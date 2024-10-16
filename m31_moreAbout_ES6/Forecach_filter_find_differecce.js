//filter selects elements based on a condition and returns an array with the element that fulfilled the condition;

const numbers =[15,26,76,54,30,89];
const marks=[80,89,87,86,67];

console.log(numbers.filter(p=>p>50));
console.log(numbers.filter(p=>p%2==0));



const friends=['tom','mona','jeri','ikkri'];

const length=friends.map(friend=>friend.length>3);
const len=friends.filter(friend=>friend.length>3);
console.log(length);
console.log(len);


// find;

console.log(numbers.find(p=>p>50)); // first[1] element which is greater than 50;ans-76