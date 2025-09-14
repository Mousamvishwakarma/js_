// let myname = " mousam    "
// console.log(myname.truelength);
 let myhero= ["thor","saktiiman"]

 let heroPower = {
    thor: "hammer",
    saktiiman: "sling", 

    getSpider: function(){
        console.log(`Spidy powor is ${this.saktiiman}`);
        
    }
 }
 Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}