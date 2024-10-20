console.log(1);
console.log(2);


// set timeout :for one time;

// setTimeout(()=>{
//     console.log(3);
// })

// setTimeout(()=>{
//     console.log(3)
// },4000)

//set interval: agin and again
// let num=0;
// setInterval(()=>{
//     num++;
// },)


let num=0;
const clockID=setInterval(()=>{
    num++;
    if(num>6){
        clearInterval(clockID)
    }

    console.log(num,clockID)
},2000)

console.log(4);
console.log(5);
console.log(6);
console.log(7);
