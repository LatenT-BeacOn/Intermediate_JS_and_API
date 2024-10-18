// hoisting;

print(56);

for(var i=0;i<4;i++){
    console.log(i);
}

console.log('outside ', i); // i=4


for(let y=0;y<4;y++){
    console.log(y);
}

//console.log('outside ', y); //value debe na;


function print(x){
    console.log('value of x=',x);
}


//closure:A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();


function stopWatch(){
    let counter=0;   //outer scope
    return function(){
        counter++;
        return counter;
    }
}