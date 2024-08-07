import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Employee from './Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5008/employees')  // Make sure this port matches your server port
      .then(response => setEmployees(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Employee List</h1>
      {employees.map(emp => <Employee key={emp._id} employee={emp} />)}
    </div>
  );
};

export default EmployeeList;
