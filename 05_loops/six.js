const coding = ["Java","JavaScript","Python","Cpp","Rb"]

const values = coding.forEach((items)=>{
    console.log(items);
    return items;

})
console.log(values);


// numbersForLoop
 const Mynum =[1,2,3,4,5,6,7,8,9,10]

 const newNums = Mynum.filter((num) =>{
    return num > 4
 } )

const newNumss = []
Mynum.forEach((num) =>{

    if(num>4){
        newNumss.push(num);
    }
})

console.log(newNumss);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userbooks1 = books.filter((bk)=> {
    return bk.genre === "History"
})
console.log(userbooks1);
const userbooks2 = books.filter((items) => {
    return items.publish >= 2000

})
console.log(userbooks2);

const userbooks3 = books.filter((items) => {
    return items.publish >= 2000 && items.genre === "History"
})
console.log(userbooks3);





