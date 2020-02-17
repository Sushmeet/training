/*
A set datastructure is kinda like an array, except that there are no duplicate entries.
in a set.
*/

class MySet {

    constructor() {
        this.collection = [];
        this.count = 0;
    }

    has(element) {
    //  if(this.collection.indexOf(element) === -1) {
    //      return false;
    //  }
    //  return true;

    // so if collection.indexOf should not be -1. Then it means it has element so it's true;
    // 
    return (this.collection.indexOf(element) !== -1);
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element);
            this.count++;
            return true
        }
        return false;
    }
    remove(element) {

    }
}

const mySet = new MySet();
mySet.add(1)
mySet.add(2);
console.log('myset---', mySet);
mySet.add(1);
console.log('myset', mySet);

