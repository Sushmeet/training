const http = require('https');

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const requestAsync = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk
            })

            res.on('end', () => {
                console.log('we are done with reading data', data)
                const parsedData = JSON.parse(data)
                resolve(parsedData)
            })

        })
        .on('error', err => console.log('----err---', err))
    })
}

requestAsync(url)
    .then(res => console.log(res))
    .catch(err => console.log(err))
