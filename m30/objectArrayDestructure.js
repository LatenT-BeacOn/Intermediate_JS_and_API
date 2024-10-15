// a technique for unpacking objcets array and assigning them to variables;

//object;
const actor={
    name:'Kajol',
    age:21,
    money:300
}


console.log(actor.money);
console.log(actor.money);
console.log(actor.money);


const x=actor.money;
console.log(x);
console.log(x);
console.log(x);

const {money, age}=actor;

console.log(money);
console.log(age);
//use property name  as a variable that contains the property value ;
const {name:nam, age: year}=actor;
console.log(nam);
console.log(year);

// ArrayDestruct

const numbers=[12,34];
const [first,second]=numbers;
const [z,y]=[13,66]

// advance like swap;

function doubleThem(a,b){
    return [a*2,b*3];
}

const [l,m]=doubleThem(2,2);
console.log(l,m);