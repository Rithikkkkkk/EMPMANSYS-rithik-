import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    department: '',
    salary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5008/employees', employee)  // Make sure this port matches your server port
      .then(response => {
        console.log(response.data);
        setEmployee({ name: '', position: '', department: '', salary: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
      <input name="position" value={employee.position} onChange={handleChange} placeholder="Position" required />
      <input name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
      <input name="salary" value={employee.salary} onChange={handleChange} placeholder="Salary" required />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;
