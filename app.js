const express = require("express");

const routes = require("./routes/routes");

const app = express();
app.use("/api/products", routes);

app.listen(process.env.PORT || 8000);
