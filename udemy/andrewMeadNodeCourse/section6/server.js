const express = require('express');

const app = express();


app.get('/', (req, res) => {
    //res.status(200).send('help');
    res.send('help');
})

app.get('/noFound', (req, res) => {
    res.status(404).send('Page not found');
})

// app.listen(3500, () => {
//     console.log('App has started on 3500');
// })

app.listen(3500)

module.exports = {
    app
}