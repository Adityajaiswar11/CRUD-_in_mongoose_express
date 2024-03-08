//creating a express server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { route } = require("./routes/route");

const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ extended: false }));
app.use(cors());

//connect to the mongoose database
const database_url = "mongodb://127.0.0.1:27017/crud"
mongoose
  .connect(database_url)
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err, "Error in database connection"));

const PORT = 4000;

//routes
app.use("/api", route);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
