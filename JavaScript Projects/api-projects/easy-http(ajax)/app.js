const http = new easyHTTP();

//Get posts

// http.get('https://jsonplaceholder.typicode.com/posts');

// const posts = http.get('https://jsonplaceholder.typicode.com/posts',
//     function(err,posts){

//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts)
//     }
// });


//POST post
const data = {
    title: 'Custom Post',
    body:'This a custom post.....'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err,post){

//     if(err){
//         console.log(err);
//     }else{
//         console.log(post)
//     }
// });

//Upadte post (PUT REQUEST)

// http.put('https://jsonplaceholder.typicode.com/posts/1', data ,function(err, post){
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(post)
//             }
// })



//Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1');

const posts = http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function(err,response){

    if(err){
        console.log(err);
    }else{
        console.log(response)
    }
});
