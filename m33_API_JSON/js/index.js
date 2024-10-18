function Display2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>user(data));
}

// function user(data){
//     for(let users of data){
//         console.log(users.name);
//     }
// }


function user(data){

    const ul=document.getElementById('user-list');

    for(let users of data){
        console.log(users.name);

        const li=document.createElement('li');
        li.innerText=users.name;
        ul.append(li);
    }
}