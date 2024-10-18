const first=2;
const second='2';

//type coercion;
//type conversion;



//primitive:
//check with only value; 
if(first==second){
    console.log('Equal');
}

else{
    console.log('Not equal');
}

// check with value and data type;
if(first===second){
    console.log('Equal');
}

else{
    console.log('Not equal');
}
const x=1;
const y=true;


//check with only value; 
if(x==y){
    console.log('Equal');
}

else{
    console.log('Not equal');
}

// check with value and data type;
if(x===y){
    console.log('Equal');
}

else{
    console.log('Not equal');
}



//non-primitive: equal comparison doesn't work for ;

const A=[];
const B=[];
// here A and B is not same cause in non-primitive ds data compared with their reference;here A and B -> different reference;
if(A===B){
    console.log('Equal');
}
else {
    console.log('Not Equal');
}


const C=[];
const D=C;
//here C and D -> same reference;
if(C===D){
    console.log('Equal');
}
else {
    console.log('Not Equal');
}
