// function loadComments(){
//     fetch('')
// }



const loadComments=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error('error happened',error));
    

}


const loadComments2=async()=>{
   try{
    const res=await fetch('https://jsonplaceholder.typicode.com/comments');
   const data=await res.json();
   console.log(data)

   }
   catch(error){
        console.log('Data loading');
   }


}



// What is an API?
//What sre the HTTP methods supported by REST??
//Can You use GET Request of PUT ti create a resource??
//What is the difference between PUT and POST?
//What is JSON
// What sre CRUD operation??
//What is the file extension of JSON??
//what are the data types Supported by JSON??
//What is the role of JSON.stringify
//Show How to Parse a JSON??
//Tell us the difference between GET and POST??(3 star);