const connect = require("../db");

const getAllProducts = async (req, res) => {
  const db = await connect();
  const collection = await db.collection("products");
  const products = await collection.find().toArray();

  res.json(products);
};

exports.getAllProducts = getAllProducts;

// TODO - przeniesienie sekretow do enva
