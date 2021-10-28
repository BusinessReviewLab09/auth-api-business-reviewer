'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require ('./src/modelinstance/index.js');


db.sync().then(() => {
    app.Start(process.env.PORT || 3001)
});