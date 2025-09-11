
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async tast is compeleete');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log("promises consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 :");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Aync task 3");
})

const PromisTwo = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "mousam ", email: "mousam@gmail.com" })
    }, 1000)
})
PromisTwo.then(function (user) {
    console.log(user);

})

const PromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "mousam", Email: "mousam@gmail.com", pass: "1235456" })
        } else {
            reject('ERROR: Somthing went wromg')
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);

    })
    .catch(function (error) {
        console.log(error);

    }).finally(() =>

        console.log("promise are resolve and reject both"));



const promisfive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "mousam", password: "12335489" })
        } else {
            reject('error')
        }
    }, 1000)
})

async function comsumePromisfive() {
  try {
      const response = await promisfive
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }

}
comsumePromisfive()

async function getUser(){
   try {
     const response = await fetch ('https://jsonplaceholder.typicode.com/users')
 const data = await response.json()    
 console.log(data);

   } catch (error) {
    console.log("E: ",error);
    
   }
}
getUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=> console.log(error));
