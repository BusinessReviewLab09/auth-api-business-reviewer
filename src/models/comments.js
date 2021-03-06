'use strict';

const commentModel = (sequelize, DataTypes) => sequelize.define('Comment', {

  text: { 
      type: DataTypes.TEXT, 
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

module.exports = commentModel;