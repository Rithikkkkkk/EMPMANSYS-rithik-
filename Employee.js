import React from 'react';
import axios from 'axios';

const Employee = ({ employee }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:5008/employees/${employee._id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Salary: {employee.salary}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Employee;
