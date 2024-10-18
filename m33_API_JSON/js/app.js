function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=>res.json())
    .then(json=>console.log(json));
}


function Display(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>user(data));
}

function user(data){
    console.log(data);
}