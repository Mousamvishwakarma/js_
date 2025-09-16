class User{
    constructor(username,gmail,passord){
        this.username= username
        this.gmail = gmail
        this.passord =passord
    }
    encryptPassword(){
        return `${this.passord}abc`
    }
  changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());