const mynums = [1,2,3,4,5,6,7,8,9,10]

const newNums = mynums.map((items)=> {
    return items + 10
})
console.log(newNums);

 const myNew = [1,2,3,4,5,6,7,8,9,10]

const newnums= myNew

.map((num) => num *10)
.map((num) => num +10)
.filter((num) => num >=50)
console.log(newnums);
