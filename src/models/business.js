'use strict';

const bizModel = (sequelize, DataTypes) => sequelize.define('Business', {
  name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  type: { 
      type: DataTypes.STRING, 
      validate: {
        isType(value) {if (!['restaurant', 'bar', 'night club', 'coffee shop', 'deli'].includes(value)) throw Error ('invalid business type')}
      },
      allowNull: false 
    },
});

module.exports = bizModel;