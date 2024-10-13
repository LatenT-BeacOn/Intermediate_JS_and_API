// var:
//let const ;

// let : allow it to reassign
// const : do not allow to reassign;


const money=50;
//money=20 // don't allow;

// we use let reassign;

let count =0;
count= 10 ; //reassigned;

const numbers=[2,3,5];
console.log(numbers);

// but here we can change the internal element ;
numbers[1]=34;
console.log(numbers); 


// Object :
const student={
    name:'monY',
    Dept:CSE

}
student.name='Maya';//right but
student={name:'monA'}; //wrong;
console.log(student);

// for reassign
let student={
    name:'monY',
    Dept:CSE

}
student={name:'monA'};

console.log(student);


// loop

for(let i=0;i<10;i++){
    console.log(i);

}
