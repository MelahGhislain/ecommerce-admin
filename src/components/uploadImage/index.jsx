import React, { useState } from "react";
import FileUpload from "react-mui-fileuploader";
import { Button, Typography } from "@mui/material";
import axios from "axios";

const PRESET = process.env.REACT_APP_CLOUD_PRESET
const CLOUD_URL = 'https://api.cloudinary.com/v1_1/dyuhndnwg/image/upload'

const UploadImage = ({setImageUrl, setIsLoading, setError, error, errorMsg}) => {
 
  

  const handleFilesChange = (files) => {
    setError(false)
    if(files.length > 0){
      uploadFiles(files[0])
    }
  };

  const uploadFiles = (file) => {

    const formData = new FormData ();
    formData.append("file", file);
    formData.append("upload_preset", PRESET);
    
    setIsLoading(true)

    axios.post(CLOUD_URL, formData).then(res => {
      setImageUrl(res.data.secure_url);
      setIsLoading(false)
    }).catch(err => {
      setIsLoading(false)
      setError(true)
      console.log(err)
    })
  };

  return (
    <>
      <FileUpload
        getBase64={false}
        multiFile={false}
        disabled={false}
        title=""
        header="[Drag to drop]"
        leftLabel="or"
        rightLabel=""
        buttonLabel="click here"
        buttonRemoveLabel="Remove all"
        maxFileSize={10}
        maxUploadFiles={1}
        maxFilesContainerHeight={357}
        allowedExtensions={['jpg', 'jpeg', 'png']}
        onFilesChange={handleFilesChange}
        imageSrc={'path/to/custom/image'}
        BannerProps={{ elevation: 0, variant: "outlined" }}
        showPlaceholderImage={false}
        PlaceholderGridProps={{ md: 4 }}
        LabelsGridProps={{ md: 8 }}
        onContextReady={context => {
          // access to component context here
        }}
        ContainerProps={{
          elevation: 0,
          variant: "outlined",
          sx: { p: 1 }
        }}
        PlaceholderImageDimension={{
          xs: { width: 128, height: 128 },
          sm: { width: 128, height: 128 },
          md: { width: 164, height: 164 },
          lg: { width: 256, height: 256 }
        }}

      />
      {error && <Typography fontSize='small' sx={{color: 'rgba(255, 0, 0, 0.5)'}}>{errorMsg}</Typography>}
      {/* <Button onClick={uploadFiles} variant="contained" id="uploadButton">
        Upload
      </Button> */}
    </>
  )
}

export default UploadImage
