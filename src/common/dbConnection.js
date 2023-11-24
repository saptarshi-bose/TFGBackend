const mysql2 = require("mysql2");
const mongoose = require("mongoose");

class Database {
  constructor() {
    this.knex = null;
    this.mongo = null;
  }
  //creates the db connection with knex and mysql2 for query
  async createDbConnection() {
    this.knexpool = require("knex")({
      client: "mysql2",
      connection: {
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        port: process.env.SQL_PORT,
        database: process.env.SQL_DATABASE,
      },
      pool: { min: 4, max: 10 },
    });
  }
  async createMongoConnection() {
    const options = {
      useNewUrlParser: true,
    };
    const connection = await mongoose.connect(process.env.MONGO_URL, options);
    if (connection) console.log("Mongo Connected Successfully...");
  }
}
const databaseObj = new Database();
module.exports = databaseObj;
