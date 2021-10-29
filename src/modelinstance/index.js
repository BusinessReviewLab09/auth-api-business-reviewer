'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const sequelize = new Sequelize(DATABASE_URL);

const userModel = require('../auth/models/users.js');
const bizModel = require('../models/business.js');
const commentModel = require('../models/comments.js');
const starModel = require('../models/stars.js');

const Collection = require('./data-collection.js');

require('dotenv').config();

const users = userModel(sequelize, DataTypes);
const businesses = bizModel(sequelize, DataTypes);
const comments = commentModel(sequelize, DataTypes);
const stars = starModel(sequelize, DataTypes);

// businesses.hasMany(stars, { foreignKey: 'bizId', sourceKey: 'id'});
// stars.belongsTo(businesses, { foreignKey: 'bizId', targetKey: 'id'});

businesses.hasMany(comments, { foreignKey: 'bizId', sourceKey: 'id'});
comments.belongsTo(businesses, { foreignKey: 'bizId', targetKey: 'id'});


module.exports = {
    db: sequelize,
    users: new Collection(users),
    business: new Collection(businesses),
    comments: new Collection(comments),
    stars: new Collection(stars)
}