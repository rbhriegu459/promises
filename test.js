const posts = [
    {title: 'post1'},
    {title: 'post2'}
]

function getPosts(){
    setTimeout(() =>{
        let output='';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error: Something went wrong");
            }
        },2000);
    })
}


function updateLastUserActivityTime(){
    return new Promise((resolve, reject) =>{
        const last = new Date();
        setTimeout(()=>{
            console.log('Last Activity time update:', last);
            resolve(last);
        },1000);
    });
}

const pro1 = createPost({title:'post3'});
const pro2 = updateLastUserActivityTime();

Promise.all([pro1, pro2])
    .then(() => getPosts())
    .then(() => console.log("Updated last activity time"));