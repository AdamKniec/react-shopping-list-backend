const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

app.use("/api/products", routes);

app.listen(process.env.PORT || 8000);
module.exports = app;
