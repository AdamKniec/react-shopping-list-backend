const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_USER_PASSWORD}@cluster0.tbg5ov6.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString);

const connect = async () => {
  await client.connect();
  const db = await client.db(process.env.DATABASE_NAME);

  return db;
};

module.exports = connect;
