import { sequelize } from "../db/connection_&_models";

export const sync_all_tables_forced = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("All tables are synced with the models 🚀🚀🚀🔥");
  } catch (error) {
    console.log(error);
  }
};

export const alter_all_tables = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("As per requirement tables are altered");
  } catch (error) {
    console.log(error);
  }
};
