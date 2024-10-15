const numbers=[1,2,4,5,3];
//for(let i=0;i<a;i++);
//while;

//for in use on array and string;
// for of use on object;


// For of
for(const num of numbers){
    console.log(num);
}
 const d='amar o porano jaha chay'
for(const ch of d){
    console.log(ch);
}



// for in (object);
const actor={
    name:'Kajol',
    age:21,
    money:300
}

for (const keys in actor){
    console.log(keys);
}

for (const keys in actor){
    const value=actor[keys];
    console.log(value);
}


const keys=Object.keys(actor);
console.log(keys);
for(const key of keys){
    const value=actor[key];
    console.log(key,value);
}




// Again 30-9;;;