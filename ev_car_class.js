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
}