const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    name: String,
    department: String,
    role: String
});

module.exports = mongoose.model('employee', employeesSchema);