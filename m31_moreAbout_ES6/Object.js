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


class Product{
    
    constructor (name,sub){
        this.name=name;
        this.sub=sub;
    }

    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

const A=new Product('Esan','physic');
console.log(A);
A.speak('Lenevo');