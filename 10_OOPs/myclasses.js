class User {
    constructor(username, gmail, passord) {
        this.username = username
        this.gmail = gmail
        this.passord = passord
    }
    encryptPassword() {
        return `${this.passord}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

function User(username, gmail, passord) {
    this.username = username
    this.gmail = gmail
    this.passord = passord
}
 function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());