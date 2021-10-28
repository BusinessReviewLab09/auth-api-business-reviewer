'use strict';

const starModel = (sequelize, DataTypes) => sequelize.define('Stars', {

  value: { 
      type: DataTypes.ENUM(1, 2, 3, 4, 5), 
      allowNull: false 
    },

  bizId: { 
      type: DataTypes.NUMBER, 
      allowNull: false 
    },

  userId: { 
        type: DataTypes.NUMBER, 
        allowNull: false 
      },
});

module.exports = starModel;