import React from 'react';
import { TextField } from '@material-ui/core';

/**
 * Custom textfield
 * If we use a textfield in the application,
 * we import the textfield from here
 * @param {*} param0 props of the component
 */
const CustomTextField = ({ autoFocus, required, label, color, className, onChange, type }) => {
    return (
            <TextField
                variant="outlined"
                margin="normal"
                required={required}
                fullWidth
                label={label}
                autoFocus={autoFocus}
                className={className}
                color={color || "primary"}
                onChange={text => onChange && onChange(text.target.value)}
                type={type}
            />
    );
}



export default CustomTextField;