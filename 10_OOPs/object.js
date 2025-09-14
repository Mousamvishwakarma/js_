function getmultipleby5(num) {
    return num * 5

}
getmultipleby5.power = 2
console.log(getmultipleby5(5));
console.log(getmultipleby5.power);
console.log(getmultipleby5.prototype);

function createFunc(username, score) {
    this.username = username
    this.score = score
}
createFunc.prototype.increment = function () {
    this.score++
}
createFunc.prototype.printme =function(){
    console.log(`price is ${this.score}`);
    
}
const chai =new  createFunc("chai ",25);
const tea = new createFunc("tea ",250);

chai.printme()

tea.printme()

