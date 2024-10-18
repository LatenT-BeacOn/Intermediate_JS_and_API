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