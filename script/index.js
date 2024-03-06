

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`Zhis ${this.name} is sleaping`);
    }
}
class Rabit extends Animal{
    name = "rabit";

    run(){
        console.log(`This ${this.name} is runing`);
    }
}
class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flaing`);
    }
}
const rabit = new Rabit();
const fish = new Fish();
const hawk = new Hawk();


console.log(rabit.alive);
rabit.eat();
rabit.sleep();
fish.eat();

rabit.run();
fish.swim();
hawk.fly();
