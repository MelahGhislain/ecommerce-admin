import { Box, Popover, MenuItem, makeStyles } from '@mui/material';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { MoreVert } from '@mui/icons-material';
import { useState } from 'react';

export default function CategoryGrid({columns, rows, isLoading}) {
    const [open, setOpen] = useState(null);

    const tableColumn = [
        {
            field: 'image',
            headerName: 'Image',
            editable: false,
            renderCell: (params) => {
                const {value} = params
                return (
                    <Box sx={{height: '3rem', width: '3rem', padding: '5px'}}>
                        <img src={value} alt='category' style={{height: '100%', width: '100%', objectFit: 'contain'}} />
                    </Box>
                )
            }
        },
        ...columns,
        {
            field: 'modify',
            headerName: '',
            sortable: false,
            width: 100,
            editable: false,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => {
                return (
                    <>
                        <MoreVert onClick={handleOpenMenu}/>
                        <Popover
                            open={Boolean(open)}
                            anchorEl={open}
                            onClose={handleCloseMenu}
                            elevation={1}
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
                            <MenuItem sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                                <EditOutlined />
                                <span>Edit</span>
                            </MenuItem>

                            <MenuItem sx={{ color: 'error.main', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <DeleteOutlined />
                                Delete
                            </MenuItem>
                        </Popover>
                    </>
                )
            } 
        }
    ]
    const editRow =(id)=>{
        console.log('edited row', id)
    }
    const deleteRow =(id)=>{
        console.log('deleted row', id)
    }
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
                loading={isLoading}
                columns={tableColumn}
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
            {/* <Popover
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
                <MenuItem sx={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <EditOutlined />
                    <span>Edit</span>
                </MenuItem>

                <MenuItem sx={{ color: 'error.main', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <DeleteOutlined />
                    Delete
                </MenuItem>
            </Popover> */}
        </Box>
    );
}
