// write a code that defines a constructor function called Car thar creates a new object with the folllowing properties:makes,model,year

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// add a description method to the Car prototype property that returns a string containing information about the car

Car.prototype.getDescription = function () {
  return "Make: ${this.make} Model: ${this.model} Year: ${this.year}";
};

//define the electricCar as a subclass of Car. include an additional property called ```Range```that represents the range of the electric car in miles

function ElectricCar(make, model, year, range) {
  Car.call(this, make, model, year);
  this.range = range;
}
//Have the ElectricCar prototype override the description method of the car prototype with a new implementation that include info about range

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
Override;
ElectricCar.prototype.getDescription = function () {
  return "${Car.prototype.getDescription.call(this)} Range: ${this.range}";
};

// create an instance of the ElectricCar

const tesla = new ElectricCar("Tesla", "Model S", 2019, 300);
//console.log tesla
console.log(tesla);
//ElectricCar { make: 'Tesla', model: 'Model S', year: 2019, range: 300 }
/* console.table(tesla);
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│  make   │  'Tesla'  │
│  model  │ 'Model S' │
│  year   │   2019    │
│  range  │    300    │
└─────────┴───────────┘
 */
