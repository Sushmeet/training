const defaults = {
    method: 'POST',
    callback: function nam() { },
    headers: {
        'content-type': 'text/plain'
    }
}

const config = {
    url: 'http://some.url',
    callback: function sushi() { },
    headers: {
        'x-requested-with': 'Namboo nambooo'
    }
}

let {
    url: sushiUrl,
    callback,
    headers: {
        'content-type' : contentType = defaults.headers['content-type'],
        'x-requested-with': jAGOOO
    }

} = config;

console.log(sushiUrl, callback, contentType, jAGOOO);