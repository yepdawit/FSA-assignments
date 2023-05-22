// write a code that defines a constructor function called car that creates a new object with the following properties: make, model, year
// we can use class syntax to define a constructor function
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // add a description method to the Car prototype property that returns a string containing information about the car
  // we can use getDescription(){} to define a method
  getDescription() {
    return `Make: ${this.make} Model: ${this.model} Year: ${this.year}`;
  }
}
// define the electricCar as a subclass of Car. include an additional property called ```Range```that represents the range of the electric car in miles
// we can use extends keyword to define a subclass
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year); // super() is used to call the constructor of the parent class
    this.range = range;
  }
  // Have the ElectricCar prototype override the description method of the car prototype with a new implementation that include info about range
  getDescription() {
    return `${super.getDescription()}, Range: ${this.range} miles`;
  }
}

// create an instance of the ElectricCar
const electricCar = new ElectricCar("Tesla", "Model S", 2019, 300);
// console.log electricCar
console.log(electricCar.getDescription()); // Make: Tesla Model: Model S Year: 2019, Range: 300 miles
