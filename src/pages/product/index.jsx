import { Box, Button, Grid, Typography } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons';
import ProductGrid from './productGrid';
import { Link } from 'react-router-dom';

const ProductPage = () => {
    return (
        <Box>
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
                        <Typography variant="h5">Products</Typography>
                        <Link to="/product/add" style={{ textDecoration: 'none' }}>
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
                        <ProductGrid />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;
