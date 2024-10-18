function greeting(greetingHandlers,name){
    greetingHandlers(name);
}

function greetingHandlers(name){
    console.log('Good Morning',name);
}

function GreetEvening(name){
    console.log('Good Evening',name);
}

greeting(greetingHandlers,'Tom');
greeting(greetingHandlers,'Jeri');
greeting(GreetEvening,'Jara');


//Function Argument;

function sum(a,b,c){

    console.log(arguments); 

    console.log(...arguments);
      //arguments->Array like Object, a special keyWord which is works only inside a function; value push kora jayna;
      console.log(arguments[2]); 


    const results=a+b+c;
    return results;
}

console.log(sum(3,4,5));
console.log(sum.length);//how many parameter passed;



//primitive : value not change after function work;

let a=3,b=3;
function add(x,y){
    x=27;
    return x+y;
}
console.log(add(a,b));
console.log(a);
add(1,1);
console.log(a);


//non-primitive: value changed after function work;cause pass by reference;


let man1={is:1,name:'Raj'};
let man2={is:2,name:'Robi'};

function MakeMovie(x1,x2){
    x1.name='Liza';
    x2.name='Lipi';

}

console.log(man1,man2);
MakeMovie(man1,man2);
console.log(man1,man2);


