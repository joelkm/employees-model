const employees = require('./employees.mongo');

async function getAllEmployees() {
    return await employees.find({}, 'name department role');
}

async function addNewEmployee(employee) {
    try{
        const newEmployee = await employees.create({
            name: employee.name,
            department: employee.department,
            role: employee.role
        });
        return newEmployee;
    } catch(err) {
        console.error(`Could not add employees ${err}`)
    }
}

async function deleteEmployeeById(employeeId) {
    try{
        deletedEmployee = await employees.deleteOne({_id: employeeId});
        return deletedEmployee;
    } catch (err) {
        console.error(`Could not delete the employee ${err}`)
    }
}

module.exports = {
    getAllEmployees,
    addNewEmployee,
    deleteEmployeeById
}