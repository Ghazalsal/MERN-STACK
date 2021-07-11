class Ninja{
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed=3;
        this.strength = 3;
    }
    sayName() {
        console.log(` ninja's name is: ${this.name}`);
    }
    showStats(){
        console.log(`ninja's name is: ${this.name} his strength is ${this.strength} his speed is ${this.speed} and his health is ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`drinking sake raised his health: ${this.health}`);
    }
}
const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();