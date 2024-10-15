// var let const;
// default parameter
//template string;
//Arrow function;
// destructuring,object-> keys,values,entries;
// for in,for of






const a=90;
const numbers=[1,2,3];
const person={
    name:'Mona'

}

const massage=`hi ${person.name} has a:${a} access tp ${numbers}`;



const sum=(x,b)=>x+b



const {age, y,...others}={x:2 ,name:'Akash',z:56,m:90};





//data access;

const data=[{id:1,name:'abc', Adrress:'Dhaka'}];
console.log(data[0].Adrress);


const product={
    count:50000,
    data:[
        { id:1,price:'lenevo',price:65000},
        { id:2,price:'lenevo2',price:66000}
    ]
}

console.log(product.data[1].price);


const user={
    id:200,
    name:'sarif',
    adress:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        }
    }
}

console.log(user.adress.street?.second);
console.log(user.adress.city?.second);