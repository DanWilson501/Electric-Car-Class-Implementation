// U5223-1368
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
    }

    brake() {
        this.speed -= 5;
        console.log(`The ${this.make}, is now going at ${this.speed}, km/h.`);
    }
}
// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`This ${this.make}'s battery charged to ${this.charge}%`);
    }

    accelerate() {
        if (this.charge > 0) {
            this.speed += 20;
            this.charge -= 1;
            console.log(`The ${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
        } else {
            console.log(`The ${this.make} can't accelerate, battery is empty!`);
        }
    }
}