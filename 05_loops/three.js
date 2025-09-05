// for Of loop
const arr = [1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
    
}

// String for of loops

const greate = "mousam"
for (const name of greate) {
    // console.log(greate.slice());
    
    console.log(` value is ${name}`);   
}


// Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"Unites of America")
map.set('R',"Russia")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);  
}

const myObject = {
game1 : 'NFS',
    game2: 'FF'
}
for (const [key, value] of myObject) {
    console.log(key, ':-' , value);  
    
}