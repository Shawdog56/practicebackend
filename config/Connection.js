import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const connection = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default connection;
