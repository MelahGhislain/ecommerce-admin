import { Box, Grid, Typography } from '@mui/material';

const AddProduct = () => {
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
                        <Typography variant="h5">Add Product</Typography>
                        {/* <Button size="small" color="primary" variant="outlined" sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <PlusOutlined />
                            <span>ADD</span>
                        </Button> */}
                        <Box>{/* <CustomTimeline /> */}</Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddProduct;
