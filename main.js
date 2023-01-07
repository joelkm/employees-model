const e = require('express');
const express = require('express');
const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://koachtask:koach@cluster0.dklxm8g.mongodb.net/koach?retryWrites=true&w=majority'

const { getAllEmployees, addNewEmployee, deleteEmployeeById} = require('./employees.model');

const app = express();
app.use(express.json());

app.get('/employees', (req, res) => {
    sendEmployees(res);
});

async function sendEmployees(res) {
    res.status(200).json(await getAllEmployees());
}


app.post('/employees', (req, res) => {
    addEmployee(req, res)
});

async function addEmployee(req, res) {
    const employee = req.body;

    const created = await addNewEmployee(employee);
    res.status(201).json(created);
}


app.delete('/employees', (req, res) => {
    removeEmployee(req, res)
});

async function removeEmployee(req, res) {
    const employeeId = req.body.id;
    console.log(employeeId);
    
    const deleted = await deleteEmployeeById(employeeId);
    return res.status(200).json(deleted);
}

mongoose.connection.once('open', () => {
    console.log('Connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(error);
})

async function startServer() {
    await mongoose.connect(MONGO_URL);
    
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });    
}

startServer();