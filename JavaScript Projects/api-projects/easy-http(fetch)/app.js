const http = new EasyHTTP;


//Get Users

// const users = http.get('https://jsonplaceholder.typicode.com/users')
//                 .then(data =>console.log(data))
//                 .catch(err => console.log(err))

// Create User
const user  = {
  name: 'Anish Saxnea',
  email : 'saxenamishi@gmail.com',
  username : 'saxenamishi'

}

//POST USER 

// http.post('https://jsonplaceholder.typicode.com/users',user)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//PUT or OVERWRITE USER
// http.put('https://jsonplaceholder.typicode.com/users/2',user)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// //DELETE USER
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch( err => console.log(err))