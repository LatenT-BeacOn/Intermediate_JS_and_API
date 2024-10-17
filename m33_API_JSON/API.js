//DNS;
//Internet;
//Server;
//How DNS works;
//HTTP Vs HTTPS;
//what is an API ->application programming interface(API) is a connection between computers or between computer program or  is a type of software interface;

//JSON: JavaScript Object Notation;
const user={id:1,name:'lion',jod:'Hunt'};
console.log(user);
const objJSON=JSON.stringify(user);
console.log(objJSON);
const objParse=JSON.parse(objJSON);
console.log(objParse);


const shop={
    name:'AliaShop',
    address:{
        country:'Bangladesh',
        city:'Dinajpur',
        Product:['Laptop','mic','Monitor']
    },
    isOpen:true
}

console.log(JSON.stringify(shop));
console.log(JSON.parse(JSON.stringify(shop)));

