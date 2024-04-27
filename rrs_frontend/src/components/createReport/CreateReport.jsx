import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addReport } from '../../store/actions/reportActions'; // Import addReport action
import './CreateReport.css'; // Import the CSS file
import Navbar from '../navbar/Navbar';

const CreateReport = () => {

  const dispatch = useDispatch(); // Initialize useDispatch hook
  
  const [title, setTitle] = useState('');
  const [findings, setFindings] = useState('');
  const [impression, setImpression] = useState('');
  const [report_status, setStatus] = useState('New'); // Default status
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!title.trim() || !findings.trim() || !impression.trim()) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Dispatch addReport action
    try {
      
        await dispatch(addReport({ title, findings, impression, report_status }));
        //Clear form fields
        setTitle('');
        setFindings('');
        setImpression('');
        setStatus('New');
        setErrorMessage('');
        window.alert('Report Submitted Successfully')
      
      
    } catch (error) {
      console.error('Error submitting report:', error.message);
      setErrorMessage('Failed to submit report. Please try again later.');
    }
  };

  return (
    <div className='main'>
      <Navbar/>
    <div className="form-container">
      <h2 className='form-header'>Create New Report</h2>
      <form className='form' onSubmit={handleSubmit}>
      
        <div className='input-field-container'>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
          placeholder="Title"
        />
        </div>
        <div className='input-field-container'>
        <label>Findings</label>
        <textarea
          value={findings}
          onChange={(e) => setFindings(e.target.value)}
          className="input-field"
          placeholder="Findings"
        />
        </div>
      <div className='input-field-container'>
      <label>Impression</label>
        <textarea
          value={impression}
          onChange={(e) => setImpression(e.target.value)}
          className="input-field"
          placeholder="Impression"
        />
        </div>
        <div className='input-field-container'>
        <label>Status</label>
        <select
          value={report_status}
          onChange={(e) => setStatus(e.target.value)}
          className="select-field"
        >
          <option value="New">New</option>
          <option value="Unread">Unread</option>
          <option value="Prelim">Prelim</option>
          <option value="Final">Final</option>
        </select>
        </div>
        <div className='input-field-container'>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className='submit-container'>

        <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreateReport;
