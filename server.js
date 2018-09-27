const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const tableArray = [
    {
        id: '80085',
        name: 'Chace',
        email: 'test@test.com',
        phone: '2309-235-079'
    },
];

const waitingArray = [];


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/make', (req, res) => {
    res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/api/table-link', (req, res) => {
    return res.json(tableArray);
});

app.get('/api/waiting-list', (req, res) => {
    return res.json(waitingArray);
});

app.post("/api/table-link", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newTable = req.body;
   

    console.log(newTable);
    console.log(`This many waiting: ${waitingArray.length}`);

    if (tableArray.length > 4) {
        waitingArray.push(newTable);
    } else {
        tableArray.push(newTable);
    }

    res.json(newTable);
});


app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));