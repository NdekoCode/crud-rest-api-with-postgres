import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
export default Product;
