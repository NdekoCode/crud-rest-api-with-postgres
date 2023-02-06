import { Sequelize } from "sequelize";

const logging = () => (process.env.NODE_ENV === "development" ? true : false);
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_DIALECT = process.env.DB_DIALECT;
console.log(DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT);
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: DB_DIALECT,
  host: DB_HOST,
  logging,
});
export default async function connectDatabase(app) {
  const PORT = process.env.PORT || 4500;
  try {
    await sequelize.sync();
    console.log("DB connected succefully");
    app.listen(PORT, () => {
      console.log("The server is running at localhost:" + PORT);
    });
  } catch (error) {
    console.log("DB connection failded ", error.message, error.stack);
  }
}
