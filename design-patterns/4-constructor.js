
/* 
Constructor pattern
*/

class automobile {
    constructor(name, color, door) {
       this.name = name;
       this.color = color;
       this.door = door;
    }
  }
  
  const civic = new automobile('civic', 'red', 4);
  const corolla = new automobile('corolla', 'black', 2);

  console.log(civic);
  console.log(corolla);