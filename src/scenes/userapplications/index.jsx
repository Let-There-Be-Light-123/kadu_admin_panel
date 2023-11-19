import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { mockBookings } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme.js"
import { useNavigate } from "react-router-dom";


const UserApplications = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleRowClick = (param) => {
        console.log("Property Clicked ", param.row.propertyId);
        navigate(`/bookingapplicationdetails/${param.row.propertyId}`);
      };

    const userApplicationsMockData = [
        {  id:1,
          bookingId: 1,
          checkInDate: '2023-12-01',
          checkOutDate: '2023-12-07',
          guests: [
            { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', socialSecurity: '123-45-6789' },
            { id: 2, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', socialSecurity: '123-45-6789' },
            // Add more guests as needed
          ],
          bookedBy: {
            userId: 101,
            userName: 'Sanskari Kumar',
            phone: '123-456-7890', email: 'john@example.com', socialSecurity: '123-45-6789'
          },
          totalGuests: 2, // Update with the total number of guests
          roomDetails: {
            roomId: 201,
            roomName: 'Suite Room',
            // Add more room details as needed
          },
          propertyDetails: {
            propertyId: 301,
            propertyName: 'Luxury Villa',
            // Add more property details as needed
          },
        },
        // Add more user applications as needed
      ];

      const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
          field: "propertyDetails.propertyName",
          headerName: "Property Name",
          flex: 1,
          valueGetter:(params) => params.row.propertyDetails?.propertyName,
          cellClassName: "name-column--cell",
        },
        {
          field: "roomNum",
          headerName: "Room Number",
          flex: 1,
          valueGetter: (params)=>params.row.roomDetails?.roomId
        },
        {
          field: "userName",
          headerName: "User Name",
          flex: 1,
          valueGetter: (params) => params.row.bookedBy.userName
        },
        {
            field: "userPhone",
            headerName: "User Phone",
            flex: 1,
            valueGetter: (params) => params.row.bookedBy.phone
          },
        {
          field: "totalGuests",
          headerName: "Total Guests",
          flex: 1,
        },
        {
          field: "checkInDate",
          headerName: "Check In Date",
          flex: 1,
        },
        {
          field: "checkOutDate",
          headerName: "Check Out Date",
          flex: 1,
        },
      ];
    

    return (
        <Box m="20px">
            <Header
                title="APP USERS"
                subtitle="Currently registered users"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
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
                    rows={userApplicationsMockData}
                    checkboxSelection
                    columns={columns}
                    onRowClick={handleRowClick}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default UserApplications;
