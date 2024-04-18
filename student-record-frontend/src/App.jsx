import React, { useState } from 'react';

function App() {
  const [addName, setAddName] = useState('');
  const [addRoll, setAddRoll] = useState('');
  const [getRoll, setGetRoll] = useState('');
  const [updateRoll, setUpdateRoll] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [deleteRoll, setDeleteRoll] = useState('');
  const [output, setOutput] = useState('');

  const handleAddStudent = () => {
    fetch('http://localhost:3000/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: addName, roll: addRoll })
    })
      .then(response => response.json())
      .then(data => {
        setOutput(`Name: ${data.data.name}, Roll: ${data.data.roll}`);
      })
      .catch(error => {
        console.error('Error adding student:', error);
        setOutput(`Error adding student`);
      });
  };

  const handleGetStudentName = () => {
    fetch(`http://localhost:3000/student/${getRoll}`)
      .then(response => response.json())
      .then(data => {
        setOutput(`Name: ${data.data.name}`);
      })
      .catch(error => {
        console.error('Error fetching student name:', error);
        setOutput(`Error fetching student name.`);
      });
  };

  const handleUpdateStudentName = () => {
    fetch(`http://localhost:3000/student/${updateRoll}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: updateName })
    })
      .then(response => response.json())
      .then(data => {
        setOutput(`Name: ${data.data.name}`);
      })
      .catch(error => {
        console.error('Error updating student name:', error);
        setOutput(`Error updating student name.`);
      });
  };

  const handleDeleteStudent = () => {
    fetch(`http://localhost:3000/student/${deleteRoll}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          setOutput(`Student with roll number ${deleteRoll} deleted successfully!`);
        } else {
          throw new Error('Error deleting student.');
        }
      })
      .catch(error => {
        console.error('Error deleting student:', error);
        setOutput(`Error deleting student.`);
      });
  };

  return (
    <div className="container">
      <h1>Student Record</h1>
      <div className="input-container">
        <div>
          <h2>Add Student</h2>
          <label htmlFor="addName">Student Name:</label>
          <input type="text" id="addName" name="addName" value={addName} onChange={(e) => setAddName(e.target.value)} />
          <label htmlFor="addRoll">Roll Number:</label>
          <input type="number" id="addRoll" name="addRoll" value={addRoll} onChange={(e) => setAddRoll(e.target.value)} />
          <button onClick={handleAddStudent}>Add Student</button>
        </div>
        <div>
          <h2>Get Student Name</h2>
          <label htmlFor="getRoll">Roll Number:</label>
          <input type="number" id="getRoll" name="getRoll" value={getRoll} onChange={(e) => setGetRoll(e.target.value)} />
          <button onClick={handleGetStudentName}>Get Student Name</button>
        </div>
        <div>
          <h2>Update Student Name</h2>
          <label htmlFor="updateRoll">Roll Number:</label>
          <input type="number" id="updateRoll" name="updateRoll" value={updateRoll} onChange={(e) => setUpdateRoll(e.target.value)} />
          <label htmlFor="updateName">Student Name:</label>
          <input type="text" id="updateName" name="updateName" value={updateName} onChange={(e) => setUpdateName(e.target.value)} />
          <button onClick={handleUpdateStudentName}>Update Student Name</button>
        </div>
        <div>
          <h2>Delete Student</h2>
          <label htmlFor="deleteRoll">Roll Number:</label>
          <input type="number" id="deleteRoll" name="deleteRoll" value={deleteRoll} onChange={(e) => setDeleteRoll(e.target.value)} />
          <button onClick={handleDeleteStudent}>Delete Student</button>
        </div>
      </div>
      <div className="output-container">
        <h2>Output</h2>
        <div id="output">{output}</div>
      </div>
    </div>
  );
}

export default App;
