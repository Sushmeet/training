// destructuring and restructuring 

const defaults = {
    url: 'http://some.base.url',
    method: 'post',
    headers: [
        'content-type: text/plain'
    ]
};

console.log('Original default object', defaults);

// *************
// specific user settings 

const settings = {
    url: 'https://sushiurl.com',
    data: 42,
    callback: () => 2
}

const balooni = {
...defaults,
... settings
}

console.log('Mixed object' , balooni);

const salami = Object.assign({}, defaults, settings);

console.log('Mixed Salami', salami);