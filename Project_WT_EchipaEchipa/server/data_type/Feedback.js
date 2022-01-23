const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Feedback extends Model {}

Feedback.init(
  {
    startPoint: {
      type: DataTypes.STRING,
    },
    destPoint: {
      type: DataTypes.STRING,
    },
    transport: {
      type: DataTypes.STRING,
    },
    departureH: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    crowd: {
      type: DataTypes.STRING,
    },
    obs: {
      type: DataTypes.STRING,
    },

    satisfaction: {
      type: DataTypes.INTEGER,
    },
    user: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Feedback",
    timestamps: false,
  }
);

module.exports = Feedback;
