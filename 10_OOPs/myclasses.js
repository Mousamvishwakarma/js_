class User{
    constructor(username,gmail,passord){
        this.username= username
        this.gmail = gmail
        this.passord =passord
    }
    encryptPassword(){
        return `${this.passord}abc`
    }
}
const chai = new User ("mousam"," mousam2055@gmail.com", "123456")