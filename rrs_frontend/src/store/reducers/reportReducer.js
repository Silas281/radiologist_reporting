import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reports: [],
  selectedReport: null,
};

const reportSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setReports(state, action) {
      state.reports = action.payload;
    },
    addReport(state, action) {
      state.reports.push(action.payload);
    },
    updateReport(state, action) {
      const { id, updatedReport } = action.payload;
      const index = state.reports.findIndex(report => report.id === id);
      if (index !== -1) {
        state.reports[index] = updatedReport;
      }
    },
    deleteReport(state, action) {
      const id = action.payload;
      state.reports = state.reports.filter(report => report.id !== id);
    },
    getReport(state, action) {
      const report = action.payload;
      state.selectedReport = report;
    },  
  },
});

export const { setReports, addReport, updateReport, deleteReport, getReport } = reportSlice.actions;
export default reportSlice.reducer;
