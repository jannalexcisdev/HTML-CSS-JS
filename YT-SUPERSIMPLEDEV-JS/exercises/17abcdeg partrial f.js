class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.#brand;
    this.#model = carDetails.#model;
  }
  
  displayInfo() {
    console.log(`${this.#brand} ${this.#model}`);
  }

  go() {
    if (this.speed < 200 && this.isTrunkOpen === false) {
      this.speed += 5; 
      console.log(`${this.#brand} is going at ${this.speed} km/h`);
    } else {
      console.log('Speed cannot exceed 200 km/h');
    }
  }

  brake() {
    if (this.speed >= 0) {
      console.log('Car is already stopped');
    } else {
      this.speed -= 5; 
      console.log(`${this.#brand} slowed down to ${this.speed} km/h`);
    }
  }

  openTrunk() {
    if (this.speed !== 0) {
      console.log('Trunk cannot be opened while running')
    } else {
      this.isTrunkOpen = true;
      console.log('Trunk Open');
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
    console.log('Close Trunk')
  }
}

class Racecar extends Car {
  acceleration;
  constructor (carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed < 300) {
      this.speed += this.acceleration; 
      console.log(`${this.brand} is going at ${this.speed} km/h`);
    } else {
      console.log('Speed cannot exceed 300 km/h');
    }
  }
}


const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand:'Tesla', 
  model:'Model 3'
});

const car3 = new Racecar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

car3.go();
car3.go();  


console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();
car1.brake();
car1.go();
car1.go();
car2.go();
