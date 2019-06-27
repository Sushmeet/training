class Balloon {
    constructor(cost) {
        this._cost = cost;
    }

    get cost() {
        return this._cost
    }

    set costUpdate(cost) {
        this._cost = cost;
    }
}

const balloon1 = new Balloon(10);
console.log('balloon1', balloon1);

balloon1.costUpdate = 30;
console.log('ballon get', balloon1.cost);