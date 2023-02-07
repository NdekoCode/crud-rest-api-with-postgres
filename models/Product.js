import { sequelize } from "../config/dbConfig";
const Product = sequelize.define("product", {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.TEXT,
    allNull: false,
  },
  price: {
    type: DataType.FLOAT,
    allowNull: false,
  },
});
export default Product;
