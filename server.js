const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5005;  // Make sure this matches your running port

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/employeeDB');

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String,
  salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);

app.get('/employees', async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

app.post('/employees', async (req, res) => {
  const newEmployee = new Employee(req.body);
  await newEmployee.save();
  res.json(newEmployee);
});

app.delete('/employees/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted' });
});

app.listen(5008, () => {
  console.log(`Server is running on port 5008`);
});
