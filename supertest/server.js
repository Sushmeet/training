const express = require('express');
const app = express();


app.get('/api', function (res, res) {
    var obj = [
        {
            name: 'john',
            power: 'jump'
        },
        {   
            name: 'Logan',
            power: 'claws'
        }
    ]
    res.send(obj);
})

app.listen(9901, function () {
    console.log('server is running.')
})