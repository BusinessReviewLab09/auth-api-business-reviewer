'use strict';

// Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const userRoutes = require('./auth/routes.js');
const v2Routes = require('./routes/v2.js');




const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(userRoutes);
app.use('/api/v2', v2Routes);


module.exports = {
    server: app,
    Start: (port) => {
        app.listen(port, () => {
            console.log(`server Up on ${port}`);
        });
    },
};