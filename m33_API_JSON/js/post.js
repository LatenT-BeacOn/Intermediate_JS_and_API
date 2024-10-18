function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>displayPost(data));
}


function displayPost(data){
    console.log(data);
    const postContainer=document.getElementById('All-post');
    for(const posts of data){
        const div=document.createElement('div');
        div.innerHTML=`
            <h4>Post tittle-${posts.userId}</h4>
            <h3>Tittle-${posts.title}
            <p>Post Decription</p>`;
            
            postContainer.append(div);
    }
    

}


loadPost();


