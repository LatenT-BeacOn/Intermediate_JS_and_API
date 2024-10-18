//undefined;
// 1. variable which is not initialized;
//2. function with no return type;
//3.if parameter not passed;
//4. if return has nothing on the right side will return undefined;
//property that doesn't exists on an object will give undefined;
//accessing elements outside of array index;
//shouldn't do it ;Inside use splice; deleting an element inside an array;
//set a value directly to undefined;





// 1. variable which is not initialized;
let a;
console.log(a);
// 2. function with no return type;
function x(a,b){
    const  sum=a+b;
}

console.log(x());

//if parameter not passed;
function f(a,b){
    const sum=a+b;
    console.log(a+b);
}

console.log(f(5));

//4. if return has nothing on the right side will return undefined;
function NoNegetive(a,b){
    if(a<0 || b<0) return;
    return a+b;
}

console.log(NoNegetive(2,5));
console.log(NoNegetive(2,-5));

//property that doesn't exists on an object will give undefined;

const fifth={id:2,name:'Mona'};
console.log(fifth.age);

//accessing elements outside of array index;
const sixth=[3,5,2,6];
console.log(sixth[3], sixth[4],sixth[2]);
//shouldn't do it ;Inside use splice; deleting an element inside an array;
delete sixth[1];
console.log(sixth) //[ 3, <1 empty item>, 2, 6 ]

//set a value directly to undefined;

const eighth=undefined;
const ninth=null;
const data ={results:[],update:null};
console.log(typeof undefined);
console.log(typeof null);