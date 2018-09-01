function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
const gen1 = gen.next();
const gen2 = gen.next();
const gen3 = gen.next();
const gen4 = gen.next();


console.log(gen1);
console.log(gen2);
console.log(gen3);
console.log(gen4);



const mycolors = [];
for (let color of colors()) {
mycolors.push(color);
}