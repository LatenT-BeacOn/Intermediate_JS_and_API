const glass={
    name:'glass', 
    color:'yellow',
    price:12,
    isCleaned:true
};

//here name , color,price ,oscleaned are keys/properties; glass yellow 12,are value;

const keys=Object.keys(glass);
const value=Object.values(glass)
console.log(glass);
console.log(keys);
console.log(value);

const pair=Object.entries(glass);
console.log(pair);

delete glass.isCleaned;
console.log(glass);


//freeze 
Object.freeze(glass);
glass.source='bangladesh';
glass.price='5000';
console.log(glass);

//output without freeze ; add kora jabe jemon bangladesh;
// name: 'glass', color: 'yellow', price: 12 }
// { name: 'glass', color: 'yellow', price: '5000', source: 'bangladesh'};

//after freeze; kono kicu add kora jabe na;

// { name: 'glass', color: 'yellow', price: 12 }
// { name: 'glass', color: 'yellow', price: 12 }

