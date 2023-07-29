const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const url = 'mongodb+srv://kushmunot:kushmunot@employeecluster.mgtloeq.mongodb.net/InventoryDB?retryWrites=true&w=majority'
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

app.listen(8090, () => {
    console.log("Server Started !!");
})