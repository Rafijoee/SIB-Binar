const express = require('express');
let { port } = require('pg/lib/defaults');
const app = express();

port = 3001;

// 1. application level middleware
const logger = (req, res, next) => {
    console.log(`didalam ${req.url} api, sekarang jam ${new Date()}`);
    next();
}
app.use(logger);

// 2. built-in middleware
app.use(express.json()); // application/json
app.use(express.urlencoded({ extended: false })); // x-www-urlencoded

// 3. router middleware
const router = require('./index3');
app.get('/yglain', (req, res) => {
    res.send("Lain");
})
app.get('/iniError', (req, res) => {
    iniError;
})
app.use(router);

// internal error server handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
})
// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        status: 'fail',
        errors: 'Not found'
    })
})

// app.get('/', (req, res) => {
//     res.send("Hello dunia");
// })

app.get('/products', (req, res) => {
    res.json([
        "Apple",
        "Redmi",
        "One plus one"
    ]);
})

app.get('/orders', (req, res) => {
    res.json([
        {
            id: 1,
            paid: false,
            user_id: 1
        }, {
            id: 2,
            paid: false,
            user_id: 1
        }
    ]);
})

app.listen(port, () => {
    console.log(`Server nyala di port ${port}`);
});