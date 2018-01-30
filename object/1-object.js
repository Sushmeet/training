let o = new Object(); // empty object
console.log(o);

let t = new Object(true) // Store boolean objects in t
console.log(t);

let jsonObj = {
    name: 'Sushi',
    id: 123
}

let storeJsonObjects = new Object(jsonObj);
console.log(storeJsonObjects);

