// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())// not similar but near to JSON.parse;
//       .then(json => console.log(json))



const url='https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
// .then(res=>res.json())
// .then(json=>console.log(json));


function loadData(){
    fetch(url)
.then(res=>res.json())
.then(json=>console.log(json));
}