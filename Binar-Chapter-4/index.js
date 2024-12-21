const express = require('express');
const app = express();
const port = 3000;

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// }
// app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = require('./index3');

// 4. third-party middleware
// const morgan = require('morgan');
// app.use(morgan('dev'));

// app.get('/', (req, res) => {
//     res.send("Hello duniaaa8");
// })

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
app.use((err, req, res, next) => {
    res.status(404).json({
        status: 'fail',
        errors: 'Not found'
    })
})

app.listen(port, () => console.log(`Server is running on port ${port}`));