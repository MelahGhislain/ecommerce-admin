import { Box, Button, Grid, Typography } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import CategoryGrid from './categoryGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCategories } from '../../store/actions/category';
import { getCategoryRows } from '../../utils/mothods';
import { toast, Toaster } from 'react-hot-toast';

const CategoryPage = () => {

    const [tableRows, setTableRows] = useState([])
    const dispatch = useDispatch()

    const {isLoading, categoryItems, error, errorMsg} = useSelector((state)=> state.category)

    useEffect(()=> {
        if(!isLoading){
            dispatch(getCategories())
        }
    }, [categoryItems])

    useEffect(()=>{
        if(error && errorMsg){
            toast.error('failed to fetch categories')
        }
    },[error, errorMsg])

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: false,
        },
        {
            field: 'description',
            headerName: 'Description',
            type: 'number',
            width: 400,
            editable: false,
            align: 'left',
            headerAlign: 'left'
        },
    ];

    useEffect(()=> {
        if(categoryItems && categoryItems.length > 0){
            setTableRows(getCategoryRows(categoryItems))
        }
    },[categoryItems])
    
    return (
        <Box sx={{marginTop: '10px'}}>
            <Toaster />
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Typography variant="h5">Category</Typography>
                        <Link to="/category/add" style={{ textDecoration: 'none' }}>
                            <Button
                                size="small"
                                color="primary"
                                variant="outlined"
                                sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                            >
                                <PlusOutlined />
                                <span>ADD</span>
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <CategoryGrid 
                            columns={columns}
                            rows={tableRows}
                            isLoading={isLoading}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CategoryPage;
