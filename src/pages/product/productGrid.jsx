import { Box, Popover, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';

export default function ProductGrid() {
    const [open, setOpen] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            sortable: false,
            width: 160,
            valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
        },
        {
            field: 'modify',
            headerName: '',
            sortable: false,
            width: 100,
            editable: false,
            renderCell: (params) => <MoreVert onClick={handleOpenMenu} />
            // getActions: (params) => [<GridActionsCellItem icon={<EditOutlined />} label="Delete" onClick={deleteRow(params.id)} />]
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, modify: '' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, modify: '' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, modify: '' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, modify: '' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, modify: '' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, modify: '' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, modify: '' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, modify: '' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, modify: '' }
    ];

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };
    return (
        <Box sx={{ height: 'calc(100vh - 125px)', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75
                        }
                    }
                }}
            >
                <MenuItem>
                    <EditOutlined />
                    Edit
                </MenuItem>

                <MenuItem sx={{ color: 'error.main' }}>
                    <DeleteOutlined />
                    Delete
                </MenuItem>
            </Popover>
        </Box>
    );
}
