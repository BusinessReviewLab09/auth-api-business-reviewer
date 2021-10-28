'use strict';

const bizModel = (sequelize, DataTypes) => sequelize.define('Business', {
  name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    type: { 
      type: DataTypes.ENUM('restaurant', 'bar', 'night club', 'coffee shop', 'deli'), 
      allowNull: false 
    },
  comment: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  stars: { 
    type: DataTypes.NUMBER, 
    allowNull: false 
  }
});

module.exports = bizModel;