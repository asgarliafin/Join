const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./config/db");
const { countryRoutes } = require("./routes/countryRoutes");
const { writerRoutes } = require("./routes/writerRoutes");
const { bookRoutes } = require("./routes/bookRoutes");

require("dotenv").config();

const fileUpload = require("express-fileupload");

app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(cors());
app.use(express.static("imgs"));

db.connect();

app.use(express.json());

app.use("/book/data", bookRoutes);
app.use("/country/data", countryRoutes);
app.use("/author/data", writerRoutes);

app.listen(8000);
