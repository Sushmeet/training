function getID(obj) {
  return obj.id;
}

// so the above could be a pure function if for the sam input of Obj
// we get back the same identical output.
// what if u we told u the obj does not mutate.

const obj = {
  get id() {
    return Math.random();
  },
};

const result = getID(obj);
console.log("result--", result);
