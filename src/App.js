import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <form>
        <h2>Hello Pooja!</h2>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">Roll No:</label>
          <input type="text" id="rollno" name="rollno" required />
        </div>
        <div className="form-group">
          <label htmlFor="dept">Department:</label>
          <input type="text" id="dept" name="dept" required />
        </div>
        <div className="form-group">
          <label htmlFor="emailid">Email ID:</label>
          <input type="email" id="emailid" name="emailid" required />
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester:</label>
          <select id="semester" name="semester" required>
            <option value=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" required />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input type="text" id="language" name="language" required />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
