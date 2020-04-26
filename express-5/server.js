const express = require('express');
const app = express();

const PORT = 3333
const URL = 'localhost'

app.get('/', (req, res) => {
    res.send('ok')
});

app.g

const server = app.listen(PORT,URL, () => {
    console.log(`Server is running on http://${URL}:${PORT}`);
});



