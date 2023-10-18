require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORTS || 3002;
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({
     extended: true 
    })
);
app.use(cors())

const routes = require('./routes');
app.use(routes);


app.listen(port, () => {
    console.log(`App Listen On Port ${port}`);
});