import * as React from 'react';
import Chip from '@mui/material/Chip';
import { DataGrid } from '@mui/x-data-grid';

function renderStatusCell(params) {
  const statusColors = {
    Pending: 'warning',
    Resolved: 'success',
  };

  return <Chip label={params.value} color={statusColors[params.value]} size="small" />;
}

export const columns = [
  {
    field: 'username',
    headerName: 'Username',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'query',
    headerName: 'Query',
    flex: 2,
    minWidth: 300,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 120,
    renderCell: renderStatusCell,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
    minWidth: 150,
  },
];

export const rows = [
  { id: 1, username: 'Rajesh Kumar', email: 'rajesh.kumar@example.com', query: 'Unable to access compliance report', status: 'Pending', date: '2024-12-01' },
  { id: 2, username: 'Priya Sharma', email: 'priya.sharma@example.com', query: 'How to upload inspection documents?', status: 'Resolved', date: '2024-12-02' },
  { id: 3, username: 'Amit Verma', email: 'amit.verma@example.com', query: 'Issue with data submission', status: 'Pending', date: '2024-12-03' },
  { id: 4, username: 'Neha Gupta', email: 'neha.gupta@example.com', query: 'Error in facility inspection report', status: 'Resolved', date: '2024-12-04' },
  { id: 5, username: 'Rohan Mehta', email: 'rohan.mehta@example.com', query: 'Requesting audit trail for last inspection', status: 'Pending', date: '2024-12-05' },
  { id: 6, username: 'Anjali Patil', email: 'anjali.patil@example.com', query: 'Unable to generate compliance insights', status: 'Pending', date: '2024-12-06' },
  { id: 7, username: 'Vikas Singh', email: 'vikas.singh@example.com', query: 'Query about AI pattern analysis', status: 'Resolved', date: '2024-12-07' },
  { id: 8, username: 'Sakshi Agarwal', email: 'sakshi.agarwal@example.com', query: 'Inspection data not syncing', status: 'Pending', date: '2024-12-08' },
  { id: 9, username: 'Karthik Iyer', email: 'karthik.iyer@example.com', query: 'Issue with infrastructure assessment tool', status: 'Resolved', date: '2024-12-09' },
  { id: 10, username: 'Pooja Nair', email: 'pooja.nair@example.com', query: 'How to analyze faculty qualification data?', status: 'Pending', date: '2024-12-10' },
  { id: 11, username: 'Manoj Desai', email: 'manoj.desai@example.com', query: 'Error in uploading student performance metrics', status: 'Resolved', date: '2024-12-11' },
  { id: 12, username: 'Sonal Tiwari', email: 'sonal.tiwari@example.com', query: 'Requesting real-time compliance status', status: 'Pending', date: '2024-12-12' },
  { id: 13, username: 'Arjun Bhatt', email: 'arjun.bhatt@example.com', query: 'Unable to analyze inspection trends', status: 'Resolved', date: '2024-12-13' },
  { id: 14, username: 'Meera Reddy', email: 'meera.reddy@example.com', query: 'How to interpret actionable insights report?', status: 'Pending', date: '2024-12-14' },
  { id: 15, username: 'Akash Rao', email: 'akash.rao@example.com', query: 'Missing data in compliance dashboard', status: 'Resolved', date: '2024-12-15' },
  { id: 16, username: 'Nidhi Joshi', email: 'nidhi.joshi@example.com', query: 'Request for assistance with inspection analysis', status: 'Pending', date: '2024-12-16' },
  { id: 17, username: 'Rahul Chatterjee', email: 'rahul.chatterjee@example.com', query: 'Issue with faculty compliance reports', status: 'Resolved', date: '2024-12-17' },
  { id: 18, username: 'Sneha Mukherjee', email: 'sneha.mukherjee@example.com', query: 'How to reset AI analysis configurations?', status: 'Pending', date: '2024-12-18' },
  { id: 19, username: 'Devendra Kulkarni', email: 'devendra.kulkarni@example.com', query: 'Error in pattern recognition analysis', status: 'Resolved', date: '2024-12-19' },
  { id: 20, username: 'Ishita Chaudhary', email: 'ishita.chaudhary@example.com', query: 'Request for expedited inspection insights', status: 'Pending', date: '2024-12-20' },
];



export default function ContactDetailsTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
