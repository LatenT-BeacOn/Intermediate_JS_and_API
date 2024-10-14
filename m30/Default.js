
//Default parameter-->> if value is not provided , take as a default; 


// function add(num1 ,num2){
//     const result=num1+num2;
//     console.log(num1, num2, result);
//     return result
// }

//const sum=add(7,2);//output 7 2 9
//const sum=add(7); // output:7 undefined NaN




//take a default;
// function add(num1 ,num2=0){
//     const result=num1+num2;
//     console.log(num1, num2, result);
//     return result
// }

//const sum=add(7,2);//output 7 2 9
//const sum=add(7); // output:7 0 7



//
// function add(num1=7 ,num2=7){
//     const result=num1+num2;
//     console.log(num1, num2, result);
//     return result
// }

//const sum=add(7,2);//output 7 2 9
// const x=add(); // output:7 7 14


//string
function fullName(first,second=''){
   const full=first + ' '+second
  
    return full;
}


//Array

function friend(num=[]){
  
}

