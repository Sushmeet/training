class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(other) {
    other.health -= 10;
  }
}


const snake1 = new Snake({name: 'cobra'});        
const snake2 = new Snake({ name: 'Konga' });
snake1.bite(snake2);

console.log('snake1', snake1);
console.log('snake2', snake2);

snake1.bite(snake2);
console.log('snake2', snake2);

