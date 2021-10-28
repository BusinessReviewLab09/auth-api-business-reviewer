'use strict';

// Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');





const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



module.exports = {
    server: app,
    Start: (port) => {
        app.listen(port, () => {
            console.log(`server Up on ${port}`);
        });
    },
};