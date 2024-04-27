import React, { useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReport, deleteReport } from '../../store/actions/reportActions';
import './ReportDetail.css';
import Navbar from '../navbar/Navbar';

const ReportDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const report = useSelector(state => state.reports.selectedReport);

  useEffect(() => {
    dispatch(getReport(id));
  }, [dispatch, id]); 

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      dispatch(deleteReport(id));
      // Redirect to report list after deletion
      navigate('/');
    }
  };
  const handleUpdate = () => {
      navigate(`/report-update/${id}`);
    
  };

  return (
    <div className='main'>
      <Navbar/>
    <div className="report-detail-container">
      <h2 className="report-detail-heading">Report Detail</h2>
      {report ? (
        <div className="report-details">
          <p><strong>Title:</strong> {report.title}</p>
          <p><strong>Findings:</strong> {report.findings}</p>
          <p><strong>Impression:</strong> {report.impression}</p>
          <p><strong>Status:</strong> {report.report_status}</p>
          <div className='actions-container'>
          <button onClick={handleDelete} className="delete-button">Delete</button>
          <button onClick={handleUpdate} className="update-button">Update</button>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
    </div>
  );
};

export default ReportDetail;
