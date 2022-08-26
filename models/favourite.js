"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favourite.init(
    {
      replyId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Favourite",
    }
  );
  //figure out how to disable timestamps in this version

  Favourite.removeAttribute("id");
  return Favourite;
};
