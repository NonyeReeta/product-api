require("dotenv").config();
const express = require("express");
const { connectToDb } = require("./db");
const bodyParser = require("body-parser");
const productRoute = require("./routes/products");

// importing cors
const cors = require('cors')

const app = express()
const PORT = 3000

// TO HANDLE CORS ERROR
app.use(cors({
    origin: 'http://localhost:4200'
}))

//  CONNECTING TO DATABASE INSTANCE
connectToDb()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', productRoute);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

module.exports = app;
