import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockProperties } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleRowClick = (param) => {
    console.log("Property Clicked ", param.row.propertyId);
    navigate(`/editproperty/${param.row.propertyId}`);
  };

  const handleCreateNewProperty = () => {
    navigate("/createnewproperty");
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "imgUrl",
      headerName: "Main Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={params.row?.imgUrl}
          alt={`Property ${params.row.id}`}
          style={{ width: "30%", height: "100%", objectFit: "cover", padding: "10px" }}
        />
      ),
    },
    {
      field: "title",
      headerName: "Property Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "availableRooms",
      headerName: "Available Rooms",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "totalRooms",
      headerName: "Total Rooms",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "isActive",
      headerName: "Active Status",
      flex: 1,
    },
    {
      field: "isFeatured",
      headerName: "Featured",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="TOTAL PROPERTIES" subtitle="List of Total Properties" />
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
        <Button variant="contained" color="secondary" onClick={handleCreateNewProperty}>
          Create New Property
        </Button>
        <DataGrid
          rows={mockProperties}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onSelectionModelChange={() => {}}
          selectionModel={[]}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Properties;
