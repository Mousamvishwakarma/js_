const coding = ["Java","JavaScript","Python","Cpp","Rb"]

coding.forEach( function (items){
console.log(items);

} )

// arrow function 
coding.forEach((items) => {
    console.log(items); 
})

functionnaem
function printMe (items){
    console.log(items);
}
coding.forEach(printMe)
 
itemsIndexArray
coding.forEach((items , index,arr)=>{
    console.log(arr,index,items);
    
}) 

const myCoding = [
    {
        languageName: "JavaScript",
        languageFilename: ".js"
    },
    {
        languageName: "java",
        languageFilename: ".java"
    },
    {
        languageName: "python",
        languageFilename: ".py"
    },
]

myCoding.forEach((val)=>{

console.log(val.languageName);

})