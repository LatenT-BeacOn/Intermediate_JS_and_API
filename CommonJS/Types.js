// JavaScript :Dynamic type language ; no need to declare ;data type
// primitive type;change with value;
const a=5;
const b='amar bari';
const x=true;

//non-primitive type;change with reference ;
const age=[34,56];
const student={id:1,name:'Mona'};

console.log(typeof a, typeof b,typeof age,typeof student,typeof x)

let y=5;
let z=y;
console.log(y,z);
z=9;
console.log(y,z);


//   if we change the whole data then change only new;
const p={job:'Web developer'};
let q=p;
//console.log(p,q);

// q={job:'Back-end'};
// console.log(p,q);

// if we change partial , then change the whole data with reference;
q.job='front-end';
console.log(p,q);


