const makeStuff = () => {
  return class Toys {
        constructor(toy) {
            this.toy = toy;
        }
    }
}


const Toys = makeStuff();
const toy1 = new Toys('hasbrooo')

console.log(toy1);