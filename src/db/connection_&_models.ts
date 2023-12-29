import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const DB_URI = process.env.DB_URI;

const sequelize = new Sequelize(DB_URI);

export default async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL database connected successfully😛😛😛");
  } catch (error) {
    console.log(error);
  }
};

// Todo : Here let's define some models and Schemas for tables
