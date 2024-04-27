import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadReports } from '../../store/actions/reportActions';
import './ReportList.css';
import Navbar from '../navbar/Navbar';

const ReportList = () => {
  const dispatch = useDispatch();
  const reports = useSelector(state => state.reports.reports);

  useEffect(() => {
    dispatch(loadReports());
  }, [dispatch]);

  useEffect(() => {
    window.reloa
  }, []);

  const getStatusClassName = (status) => {
    switch (status) {
      case 'New':
        return 'status-new';
      case 'Unread':
        return 'status-unread';
      case 'Prelim':
        return 'status-prelim';
      case 'Final':
        return 'status-final';
      default:
        return '';
    }
  };

  return (
    <div className='main'>
      <Navbar/>
    <div className="report-list-container">
      <h2 className="report-list-header">Report List</h2>
      <ul>
        {reports.map(report => (
          <li className="report-item" key={report.id}>
            
            <span className="report-title">{report.title}</span>
            <div className='items-box'>
            <span className={`report-status ${getStatusClassName(report.report_status)}`}>{report.report_status}</span>
            <Link className="view-details-link" to={`/reports/${report.id}`}>View Details</Link>
            </div>
          </li>
        ))}
      </ul>
      <Link className="create-report-link" to="/create">Create New Report</Link>
    </div>
    </div>
  );
};

export default ReportList;
