import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReport, updateReport } from "../../store/actions/reportActions";
import "./EditReport.css";
import Navbar from "../navbar/Navbar";

const EditReport = () => {

  // Get report ID from URL params
  const { id } = useParams();

  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get report data from Redux store
  const report = useSelector((state) => state.reports.selectedReport);

  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    findings: "",
    impression: "",
    report_status: "New", // Default status
    patient_name: "",
    date_of_birth: "",
    referring_physician: ""
  });

  // Fetch report data on component mount
  useEffect(() => {
    dispatch(getReport(id));
  }, [dispatch, id]);

  // Update form data when report data is fetched
  useEffect(() => {
    if (report) {
      setFormData({
        title: report.title,
        findings: report.findings,
        impression: report.impression,
        report_status: report.report_status,
        patient_name: report.patient_name,
        date_of_birth: report.date_of_birth,
        referring_physician: report.referring_physician
      });
    }
  }, [report]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReport(id, formData));
    window.alert("Report Updated Successfully");
    navigate(`/reports/${report.id}`); // Navigate back to report details
  };

  return (
    <div className='main'>
      <Navbar/>
      <div className="form-container">
        <h2 className="form-header">Edit Report</h2>
        <form onSubmit={handleSubmit}>
          {/* Title input field */}
          <div className="input-field-container">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="input-field"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          {/* Findings textarea */}
          <div className="input-field-container">
            <label>Findings</label>
            <textarea
              name="findings"
              className="input-field"
              value={formData.findings}
              onChange={handleChange}
            />
          </div>
          {/* Impression textarea */}
          <div className="input-field-container">
            <label>Impression</label>
            <textarea
              name="impression"
              className="input-field"
              value={formData.impression}
              onChange={handleChange}
            />
          </div>
          {/* Report status select field */}
          <div className="input-field-container">
            <label>Status</label>
            <select
              name="report_status"
              className="select-field"
              value={formData.report_status}
              onChange={handleChange}
            >
              <option value="New">New</option>
              <option value="Unread">Unread</option>
              <option value="Prelim">Prelim</option>
              <option value="Final">Final</option>
            </select>
          </div>
          {/* Additional fields */}
          <div className="input-field-container">
            <label>Patient Name</label>
            <input
              type="text"
              name="patient_name"
              className="input-field"
              value={formData.patient_name}
              onChange={handleChange}
            />
          </div>
          <div className="input-field-container">
            <label>Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              className="input-field"
              value={formData.date_of_birth}
              onChange={handleChange}
            />
          </div>
          <div className="input-field-container">
            <label>Referring Physician</label>
            <input
              type="text"
              name="referring_physician"
              className="input-field"
              value={formData.referring_physician}
              onChange={handleChange}
            />
          </div>
          {/* Submit button */}
          <div className="submit-container">
            <button type="submit" className="submit-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReport;
