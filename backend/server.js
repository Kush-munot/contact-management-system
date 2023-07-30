const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 8090;

const url = process.env.URL;
const app = express()
mongoose.connect(url)
app.use(cors())

const con = mongoose.connection

con.on('open', (req, res) => {
    console.log("Connected to the DB");
})

app.use(express.json())

const inventoryRouter = require('./routes/inventory')
app.use('/inventory', inventoryRouter)

app.listen(port, () => {
    console.log("Server Started !!");
})