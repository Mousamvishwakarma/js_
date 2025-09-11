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
