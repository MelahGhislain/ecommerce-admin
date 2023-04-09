import { Box, Button, Grid, Typography } from '@mui/material';
import InputField from '../../components/formFields/InputField';
import UploadImage from '../../components/uploadImage';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCategory } from '../../store/actions/category';

const validationSchema =  Yup.object().shape({
    name: Yup.string()
      .required("Please enter the category name"),
    description: Yup.string().required("Please enter the category description"),
    image:  Yup.string().required("Please enter the provide an image")
  })


const AddCategory = () => {

    const navigate = useNavigate()
    const [cloudinaryImage, setCloudinaryImage] = useState()
    const [isUploading, setIsUploading] = useState()
    const [fileUploadError, setFileUploadError] = useState(false)
    const dispatch = useDispatch()
    const {isLoading, error, errorMsg} = useSelector((state)=> state.category)

    const formik = useFormik({
        initialValues: {
          name: '',
          slug: '',
          description: '',
          image: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            dispatch(addCategory(values))
            formik.resetForm()
        }
      });

      const handleNameInput = e => {
        const value = e.target.value
        formik.setFieldValue('name', value)
        const slugName = value.toLowerCase().replace(/ /g,"_")
        formik.setFieldValue('slug', slugName)
      }

      const createCategory = (e) => {
        e.preventDefault()
        formik.handleSubmit(e)
        if(!error && !errorMsg && !isLoading){
            navigate('/category')
        }else{
            toast.error(errorMsg)
        }
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        formik.handleSubmit(e)
        if(!error && !errorMsg && !isLoading){
            toast.success('Category successfully created')
        }else{
            toast.error(errorMsg)
        }
      }

      useEffect(()=> {
        if(fileUploadError){
            toast.error('failed to upload image please try again')
        }
      }, [fileUploadError])

      useEffect(()=> {
        if(cloudinaryImage){
            formik.setFieldValue('image', cloudinaryImage)
        }
      }, [cloudinaryImage])

    return (
        <Box>
            <Toaster/>
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
                        <Typography variant="h5">Add Category</Typography>

                    </Box>
                    <Box sx={{marginTop: '10px'}}>
                        <form >
                            <Grid container>
                                <Grid item xs={12} sm={6} >
                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px', marginRight: '10px'}}>
                                        <InputField 
                                            label="Name" 
                                            name='name' 
                                            onChange={handleNameInput}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                            error={formik.touched.name && formik.errors.name}
                                            errorMsg={formik.errors.name}
                                            formik={formik}
                                        />
                                        <InputField 
                                            label="Slug" 
                                            name='slug'
                                            onBlur={formik.handleBlur}
                                            value={formik.values.slug} 
                                            error={formik.touched.slug && formik.errors.slug}
                                            errorMsg={formik.errors.slug}
                                        />
                                        <InputField 
                                            label="Description" 
                                            name='description' 
                                            multiline={true}
                                            rows={5}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                            error={formik.touched.description && formik.errors.description}
                                            errorMsg={formik.errors.description}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Box sx={{marginLeft: '10px'}}>
                                        <Typography sx={{marginBottom:'5px'}}>Category Image</Typography>
                                        <UploadImage 
                                            setImageUrl={setCloudinaryImage}
                                            setIsLoading={setIsUploading}
                                            setError={setFileUploadError}
                                            error={formik.touched.image && formik.errors.image}
                                            errorMsg={formik.errors.image}
                                        />
                                        <Box sx={{marginTop: '20px', display: 'flex', alignItem: 'center', gap: 5}}>
                                            <Button type='submit' color='primary' variant='outlined' fullWidth disabled={isUploading || isLoading} onClick={handleSubmit}>
                                                <PlusOutlined />
                                                <span> ADD</span>
                                            </Button>
                                            <Button color='primary' variant='contained' fullWidth disabled={isUploading || isLoading} onClick={createCategory}>Create</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                        </form>
                        {/* Name, Slug, Description, Image */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AddCategory;
