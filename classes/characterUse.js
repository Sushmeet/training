const {Character, Fighter, Mage} = require('./character');

// const inst = new character(); console.log(inst);

const jab = new Character('popop', 989);
const thumper = new Fighter('thumper');
const zapper = new Mage('Zapper');

console.log('\n');
console.log(jab);
console.log(thumper);
console.log(zapper);


zapper.cast();              // Zapper casts a fireball!
console.log(zapper.mana);   // 99
thumper.fight();                // Thumper takes a mighty swing!
console.log(thumper.stamina); // 99