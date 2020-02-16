// Stack works on LIFO
// Last in First Out.
// we can use the array datastructure to implement


class Stack {
    constructor() {
        this.count = 0;
        this.stack = [];
    }

    length() {
        return this.count;
    }
    push(item) {
        this.stack.push(item)
        this.count++;
    }

    pop() {
        this.count--;
        return this.stack.pop()
    }
}


const stacker = new Stack();

console.log('before length', stacker.length());
stacker.push(1);
stacker.push(2);
stacker.push(3);
stacker.push(4);
stacker.push(5);

console.log('after length', stacker.length());

console.log('pop----', stacker.pop(), 'length---', stacker.length(), 'array now', stacker);