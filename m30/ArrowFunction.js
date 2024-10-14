function add(num1 ,num2){
    const result=num1+num2;
    console.log(num1, num2, result);
    return result;
}

function add(num1 ,num2){
    return num1+num2;
}


const add2=function(num1 ,num2){
    return num1+num2;
}


//arrow function;

const add3=(a,b,c) => a+b+c;
const sum=add3(5,6,2);
console.log(sum);

const mult=(a,b,c) => a*b*c;
const x=mult(5,6,2);
console.log(x);



// more arrow function


const difference=(x,y) => x-y;

const student={name:'Mona' , age:21};

const getAge=(person) =>person.age;
console.log(getAge(student));



const getThird=numbers=>numbers[2];

console.log(getThird([1 ,2 ,3 ,5,6]));



// no parameter

const Pi=()=>Math.PI;
console.log(Pi());


//large arrow function 

const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const mullt=x*y*z;
    const resultt=sum+mullt;
    return resultt;
}

console.log(doMath(2,2,2));

////difference between arrow function and regular function;'this'->keyWord; arguments;useCase;