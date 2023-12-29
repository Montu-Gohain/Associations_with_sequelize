import { Sequelize, Model } from "sequelize";
import * as dotenv from "dotenv";
import { STRING } from "sequelize";
import { alter_all_tables, sync_all_tables_forced } from "../helpers";
import { _Country_, _Capital_ } from "../interface";

dotenv.config();

const DB_URI = process.env.DB_URI;

export const sequelize = new Sequelize(DB_URI);

export default async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL database connected successfully😛😛😛");
  } catch (error) {
    console.log(error);
  }
};

// Todo : Here let's define some models and Schemas for tables

// ! Assocation 1 : One to One relationship

/*
Let's understand this assocations by the example of Country and Capital, since each country has one capital, and a capital is belong to a country, so it is a perfect example.
*/

export interface CountryInstance extends Model<_Country_>, _Country_ {}

export const Country = sequelize.define(
  "country",
  {
    countryName: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export interface CapitalInstance extends Model<_Capital_>, _Capital_ {}

export const Capital = sequelize.define(
  "capital",
  {
    capitalName: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// & Let's make the association here.

Country.hasOne(Capital);
Capital.belongsTo(Country);

// sync_all_tables_forced();
