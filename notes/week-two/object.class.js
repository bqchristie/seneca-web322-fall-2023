/**
 * The "class" keyword
 * 
 * A class in JavaScript is like a blueprint for creating objects. 
 * It defines the structure and behavior that all objects created from the class
 * should have. 
 * 
 * So, if you have a "Car" class, it describes how all cars should work and what properties they should have, like color, speed, and brand.
 * 
 * Once you have this blueprint (class), you can create many objects (instances) based on it. Each object is like a real car made from the same blueprint. You can set the color, speed, and brand differently for each car object, just like you can put different toys, books, or snacks inside different boxes.
 * 
 * 
 * 1. create object with class
 * 2. instantiate the object with the new keyword
 * 3. add a constructor
 * 4. make properties private
 * 5. demo inheritance 
 * 6. call super
 */ 

class Car {
    constructor(color='green', engine, isCertified = false) {
        this.color = color
        this.engine = engine    
        this.certified = isCertified
    }
    makeNoise() {
        console.log('Vroom')
    }
}


class Truck extends Car{}
class Bus extends Car{
    constructor(color, engine, isCertified, passengers) {
       super(color, engine, isCertified)
       this.passengers = passengers     
    }
    makeNoise() {
        console.log("boppm")
    }

};

let myCar = new Truck('green','V8')
let myOtherCar = new Bus('red','V4', true, 30)

console.log(myCar.makeNoise())
console.log(myOtherCar.makeNoise())