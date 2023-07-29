const express = require('express')
const router = express.Router()
const Inventory = require('../model/inventory_model')

router.get('/', async (req, res) => {
    try {
        const emp = await Inventory.find()
        res.json(emp)
    } catch (err) {
        console.log(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        const empid = await Inventory.findById(req.params.id)
        res.json(empid)
    } catch (err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    const inv = new Inventory({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        salary: req.body.salary,
        dateOfJoining: req.body.dateOfJoining
    })

    try {
        const a1 = await inv.save()
        res.json(a1)
    } catch (err) {
        console.log(err);
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const invs = await Inventory.findById(req.params.id)
        emp.firstName = req.body.firstName
        emp.lastName = req.body.lastName
        emp.salary = req.body.salary
        emp.email = req.body.email
        emp.dateOfJoining = req.body.dateOfJoining
        const a2 = await invs.save()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const inv = await Inventory.findById(req.params.id)
        const a2 = await inv.deleteOne()
        res.json(a2)
    } catch (err) {
        console.log(err);
    }
})
module.exports = router