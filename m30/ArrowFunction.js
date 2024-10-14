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