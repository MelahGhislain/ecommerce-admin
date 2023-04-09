import React from 'react';
import { Typography, Box, TextField } from '@mui/material';

const InputField = ({ name, type, placeholder, value, label, multiline, rows, error, errorMsg, onChange }) => {
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography htmlFor={name} variant="label" sx={{}}>
                {label}
            </Typography>
            <TextField 
                size='small' 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                multiline={multiline}
                rows={rows}
                onChange={onChange}
            />
            {error && <Typography fontSize='small' sx={{color: 'rgba(255, 0, 0, 0.5)'}}>{errorMsg}</Typography>}
        </Box>
    );
};

export default InputField;
