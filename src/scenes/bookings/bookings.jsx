import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockBookings } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme.js"

const Bookings = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        // { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "propertyName",
            headerName: "Property Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "roomName",
            headerName: "Room Name",
            flex: 1,
        },
        {
            field: "roomId",
            headerName: "Room Id",
            flex: 1,
        },
        {
            field: "user.email",
            headerName: "Guest Email",
            flex: 1,
        },
        {
            field: "user.socialSecurityNumber",
            headerName: "Social Security Number",
            flex: 1,
        },
        {
            field: "checkInDate",
            headerName: "Check In Date",
            flex: 1
        },
        {
            field: "checkOutDate",
            headerName: "Check Out Date",
            flex: 1
        }
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
                    rows={mockBookings}
                    checkboxSelection
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default Bookings;
