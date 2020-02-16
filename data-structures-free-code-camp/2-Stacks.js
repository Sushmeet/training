class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        // Check to see if the stack is empty
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
       return this.storage[this.count - 1];
    }
}

const stacker = new Stack();

// stacker.push(1);
// stacker.push(2);
// stacker.push(3);
// stacker.push(4);
// stacker.push(5);

console.log(stacker, 'size---', stacker.size());

stacker.pop();
// stacker.pop();
// stacker.pop();


console.log(stacker, 'size---', stacker.size());

console.log('peek', stacker.peek());

console.log(stacker, 'size---', stacker.size());



