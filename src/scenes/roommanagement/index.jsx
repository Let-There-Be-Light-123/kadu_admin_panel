import React from 'react';
// import { Container, DataGrid, GridToolbar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Box, Button, Grid, Switch } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";



const RoomManagement = () => {
  // Access the propertyId from the URL params
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  // Mock data for rooms (replace this with your actual data fetching logic)
  const mockRoomData = [
    { id: 1, roomNumber: 101, roomName: 'Standard Room', isActive: true, isBooked: false },
    { id: 2, roomNumber: 102, roomName: 'Deluxe Room', isActive: false, isBooked: true },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'roomNumber', headerName: 'Room Number', flex: 1 },
    { field: 'roomName', headerName: 'Room Name', flex: 1 },
    {
      field: 'isActive',
      headerName: 'Active Status',
      flex: 1,
      renderCell: (params) => (
        <Switch
          color="secondary"
          checked={params.row.isActive ||false}
          onChange={() => handleToggleActiveStatus(params.row.id)}
        />
      ),
    },
    { field: 'isBooked', headerName: 'Booking Status', flex: 1 },
  ];


  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  const handleToggleActiveStatus = (roomId) => {
    // Replace this with your logic to update the active status in the data
    console.log(`Toggle Active Status for Room ID ${roomId}`);
    // You might want to make an API call to update the active status in your database
  };

  return (
    <Box m="20px">
      <Header title="TOTAL ROOMS" subtitle="List of Total Rooms" />
      <Grid item xs={12}>
        <Button variant="contained" color="secondary" onClick={handleBack}>
          Go Back
        </Button>
      </Grid>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-row": {
            height: "100px",
            cursor: "pointer", // Add a pointer cursor to indicate clickable rows
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >

        <DataGrid
          rows={mockRoomData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onSelectionModelChange={() => { }}
          selectionModel={[]}
        // onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default RoomManagement;
