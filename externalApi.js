const express = require('express');
const cors = require('cors');

const app = express();

// enable cors
app.use(cors());

app.get('/api/fast', (req, res) => {
    console.log('fast endpoint hit');
    res.send({
        response: 'fast'
    });
});

app.get('/api/slow', (req, res) => {
    setTimeout(() => {
        console.log('slow endpoint hit');
        res.send({
            response: 'slow'
        });
    }, 5000);
});

app.listen(8081, () => {
    console.log('Listening');
});