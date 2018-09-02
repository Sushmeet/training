class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }
    }
}


const children = [
    new Comment('comment 111', []),
    new Comment('comment 222', []),
    // new Comment('meh', new Comment('comment 9898', [])),
];

const tree = new Comment('main tree', children);

console.log('tree',tree);

const values = [];
for (let value of tree) {
    values.push(value);
}

console.log('values', values);