let person = {
    name: "Sanjay_Gupta",
    age : 20,
    company : "uber",
    canvote: function(){
        if(this.age>18){
            return("can vote");
        }else{
            return("cannot vote");
        }
    }
}

console.log(person.name);
console.log(person.canvote());