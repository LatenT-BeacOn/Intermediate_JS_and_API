// class Product{
//     country ='Bangladesh';
//     speak(talk){
//         console.log(`talking about ${talk}`);
//     }
// }

// const A=new Product();
// console.log(A);
// A.speak('Lenevo');



// class Product{
//     country ='Bangladesh';
//     constructor (name){
//         this.name=name;
//     }

//     speak(talk){
//         console.log(`talking about ${talk}`);
//     }
// }

// const A=new Product('Esan');
// console.log(A);
// A.speak('Lenevo');


// class Product{
    
//     constructor (name,sub){
//         this.name=name;
//         this.sub=sub;
//     }

//     speak(talk){
//         console.log(`talking about ${talk}`);
//     }
// }

// const A=new Product('Esan','physic');
// console.log(A);
// A.speak('Lenevo');



// class Vehicle{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     } 

//     move(){
//         console.log(`${thiCan move`);
//     }
// }
// //Inheritance:
// class Bus extends Vehicle{
//     constructor(name,price,seat,ticket){
//             super(name,price);
//             this.seat=seat;
//             this.ticket=ticket;
//     } 

//     move(){
//         console.log(`Can move`);
//     }
// }



class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    } 

    move(){
        console.log(`${this.name} Can move`);
    }
}
const A=new Vehicle('Royal','530000')
console.log(A);
A.move();