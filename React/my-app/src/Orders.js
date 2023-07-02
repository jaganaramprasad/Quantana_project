

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Table from 'react-bootstrap/Table';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 35 },
  { id: 6, lastName: 'Melisandre', firstName: 'ram', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 11, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 13, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 14, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleViewClick = (params) => {
    setSelectedRow(params.row);
    setOpen(true);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 225,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 250,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 250,
      renderCell: (params) => <ViewButton onClick={() => handleViewClick(params)} />,
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const ViewButton = ({ onClick }) => (
    <Button  variant="contained"  onClick={onClick}>
      View
    </Button>
  );

  return (
    <Box>
      <DataGrid rows={rows} 
      
      
      columns={columns} 
      
      />
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
           textAlign:"center",
            width: '500px',
            height: '150px'
          }}
        >
          <Typography variant="h6"><b>Details of each record</b></Typography>
          {selectedRow && (
     <div >
      <Table>
        <thead>
          <tr >
          <th style={{ padding: '10px' }}>ID</th>
          <th style={{ padding: '10px' }}>First Name</th>
          <th style={{ padding: '10px' }}>Last Name</th>
          <th style={{ padding: '10px' }}>Age</th>
          <th style={{ padding: '10px' }}>Action</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedRow.id}</td>
            <td>{selectedRow.firstName}</td>
            <td>{selectedRow.lastName}</td>
            <td>{selectedRow.age}</td>
            <td>
   
            <Button variant="outlined" color="error" onClick={handleClose}>
               Close
            </Button>
          </td>


          </tr>  
        </tbody>


      </Table>
      
      



    
    </div>
          )}
        </Box>
      </Modal>
    </Box>
  );
}




