import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addReport } from '../../store/actions/reportActions';
import './CreateReport.css';
import Navbar from '../navbar/Navbar';

const CreateReport = () => {
  // Initialize dispatch and navigate hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define state variables for form fields and error message
  const [title, setTitle] = useState('');
  const [findings, setFindings] = useState('');
  const [impression, setImpression] = useState('');
  const [report_status, setStatus] = useState('New');
  const [patientName, setPatientName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [referringPhysician, setReferringPhysician] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!title.trim() || !findings.trim() || !impression.trim() || !patientName.trim() || !dateOfBirth.trim() || !referringPhysician.trim()) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Dispatch addReport action
      await dispatch(addReport({ title, findings, impression, report_status, patientName, dateOfBirth, referringPhysician }));
      
      // Clear form fields and error message upon successful submission
      setTitle('');
      setFindings('');
      setImpression('');
      setStatus('New');
      setPatientName('');
      setDateOfBirth('');
      setReferringPhysician('');
      setErrorMessage('');
      
      // Show success message and navigate to home page
      window.alert('Report Submitted Successfully');
      navigate(`/`);
    } catch (error) {
      console.error('Error submitting report:', error.message);
      setErrorMessage('Failed to submit report. Please try again later.');
    }
  };

  return (
    <div className='main'>
      <Navbar />
      <div className='form-container'>
        <h2 className='form-header'>Create New Report</h2>
        <form className='form' onSubmit={handleSubmit}>
          {/* Title input field */}
          <div className='input-field-container'>
            <label>Title</label>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='input-field'
              placeholder='Title'
            />
          </div>
          {/* Findings textarea */}
          <div className='input-field-container'>
            <label>Findings</label>
            <textarea
              value={findings}
              onChange={(e) => setFindings(e.target.value)}
              className='input-field'
              placeholder='Findings'
            />
          </div>
          {/* Impression textarea */}
          <div className='input-field-container'>
            <label>Impression</label>
            <textarea
              value={impression}
              onChange={(e) => setImpression(e.target.value)}
              className='input-field'
              placeholder='Impression'
            />
          </div>
          {/* Report status select field */}
          <div className='input-field-container'>
            <label>Status</label>
            <select
              value={report_status}
              onChange={(e) => setStatus(e.target.value)}
              className='select-field'
            >
              <option value='New'>New</option>
              <option value='Unread'>Unread</option>
              <option value='Prelim'>Prelim</option>
              <option value='Final'>Final</option>
            </select>
          </div>
          {/* Patient Name input field */}
          <div className='input-field-container'>
            <label>Patient Name</label>
            <input
              type='text'
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className='input-field'
              placeholder='Patient Name'
            />
          </div>
          {/* Date of Birth input field */}
          <div className='input-field-container'>
            <label>Date of Birth</label>
            <input
              type='date'
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className='input-field'
            />
          </div>
          {/* Referring Physician input field */}
          <div className='input-field-container'>
            <label>Referring Physician</label>
            <input
              type='text'
              value={referringPhysician}
              onChange={(e) => setReferringPhysician(e.target.value)}
              className='input-field'
              placeholder='Referring Physician'
            />
          </div>
          {/* Error message display */}
          <div className='input-field-container'>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
          </div>
          {/* Submit button */}
          <div className='submit-container'>
            <button type='submit' className='submit-button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateReport;
