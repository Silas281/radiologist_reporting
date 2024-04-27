import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReport, updateReport } from "../../store/actions/reportActions";
import "./EditReport.css";
import Navbar from "../navbar/Navbar";

const EditReport = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const report = useSelector((state) => state.reports.selectedReport);
  const [formData, setFormData] = useState({
    title: "",
    findings: "",
    impression: "",
    report_status: "New", // Default status
  });

  useEffect(() => {
    dispatch(getReport(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (report) {
      setFormData({
        title: report.title,
        findings: report.findings,
        impression: report.impression,
        report_status: report.report_status,
      });
    }
  }, [report]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateReport(id, formData));
    navigate(`/reports/${report.id}`);
    window.alert("Report Updated Successfully");
  };

  return (
    <div className='main'>
      <Navbar/>
    <div className="form-container">
      <h2 className="form-header">Edit Report</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="input-field-container">
          <label>Findings</label>
          <textarea
            name="findings"
            className="input-field"
            value={formData.findings}
            onChange={handleChange}
          />
        </div>
        <div className="input-field-container">
          <label>Impression</label>
          <textarea
            name="impression"
            className="input-field"
            value={formData.impression}
            onChange={handleChange}
          />
        </div>
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
