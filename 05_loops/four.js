const myObject ={
    js: "javaScritp",
    cpp : "c++",
    rb : "ruby"
}
for (const key in myObject) {
   console.log(`${key} shorcute is for ${myObject[key]}`);
   
}

// Arrayinner1Lop
const programing = ["java", "js", "cpp","rb"]
for (const key in programing) {
   console.log(programing[key]);
   
}

// Map in innerLoop

const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites of America")
map.set('R',"Russia")
for (const key in map) {
 console.log(key);
 
}


