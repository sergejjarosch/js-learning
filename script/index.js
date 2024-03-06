

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    seyHallo:function(){console.log(`Hi! I am ${this.name}!`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.seyHallo();
person1.eat();