'use strict';

const bizModel = (sequelize, DataTypes) => sequelize.define('Business', {
  name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  calories: { 
      type: DataTypes.NUMBER, 
      allowNull: false 
    },
  type: { 
      type: DataTypes.ENUM('restaurant', 'bar', 'night club', 'coffee shop', 'deli'), 
      required: true 
    }
});

module.exports = bizModel;