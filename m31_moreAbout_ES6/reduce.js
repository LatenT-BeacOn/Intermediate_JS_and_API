const numbers=[1,3,4,6,7];
const total =numbers.reduce((previous,current)=>previous+current,0)

console.log(total);

const products=[
    {id:1,name:'A',price:5000},
    {id:2,name:'C',price:5200},
    {id:3,name:'B',price:5100},
    {id:4,name:'D',price:5300}
]

// map:
const names=products.map(p=>p.name);
console.log(names);

//filter:
console.log(products.filter(p=>p.price>5100));
//forEach:
products.forEach(element =>console.log(element.id))

// find
console.log(products.find(p=>p.price<5100));