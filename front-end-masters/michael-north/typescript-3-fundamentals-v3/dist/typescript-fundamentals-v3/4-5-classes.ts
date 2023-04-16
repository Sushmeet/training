// Website for this part here https://www.typescript-training.com/course/fundamentals-v3/10-classes/ 

// Access modifier keywords
// Public ----> Everyone can see these fields and methods. everyone (this is the default)
// Protected -----> Only the class and Subsclasses can see these. The instance itself, and subclasses
// Private ------> Only the instance of the Class can see this.




class Car {
  public make: string;
  public model: string;
  public year: number;
  protected vinNumber = generateVinNumber();
  private doorLockCode = generateDoorLockCode();

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  activateTurnSignal(signal: string): void {
    console.log(signal);
  }
  //   protected unlockAllDoors() {
  //     unlockCar(this, this.doorLockCode);
  //   }
}

let sedan = new Car("Honda", "Accord", 2023);
sedan.activateTurnSignal("left");
let sedan2 = new Car("Toyota", "Camry", 2023);

function generateVinNumber() {
  throw new Error("Function not implemented.");
}
function generateDoorLockCode() {
  throw new Error("Function not implemented.");
}
// function unlockCar<Car extends Car>(arg0: this, doorLockCode: void) {
//     throw new Error("Function not implemented.");
// }
