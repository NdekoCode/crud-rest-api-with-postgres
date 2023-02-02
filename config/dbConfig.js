import { Sequelize } from "sequelize";
export default async function connectDatabase(app) {
  const DB_URL = process.env.DB_URL;
  const logging = () =>
    process.env.NODE_ENV === "developement" ? true : false;
  const sequelize = new Sequelize(DB_URL, { logging });
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
