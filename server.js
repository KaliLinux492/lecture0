const express = require('express');
const path = require('path');

const app express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {

    res.send('Hello From PostMan');
});

app.listen(5500, () => console.log('Server is started on http://127.0.0.1:5500/'))