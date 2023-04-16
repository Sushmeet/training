class Cycle {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(make, model, year);
  }
}

let ccc = new Cycle("cycle", "jjjj", 1998);

class Cycle2 {
  constructor(public make: string, public model: string, public year: number) {}
}


// let ddd = new Cycle2("cycle", "jjjj", '1998');
let ddd = new Cycle2("cycle", "jjjj", 1998);
