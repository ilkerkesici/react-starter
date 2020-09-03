import React, { useCallback } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { isFunction } from '../../helpers/utils';
import useStyles from './styles';

/**
 * Custom button for this application
 * If we want to use a Button component, import from here in the project
 * @param {*} param0 is props of the component
 */
const CustomButton = ({ onClick, color, disabled, className, text, loading }) => {
    const classes = useStyles();
    const onPress = useCallback(() => {
        if(isFunction(onClick)) onClick();
    }, [onClick]);

    return (
        <div className={classes.wrapper}>
        <Button
            fullWidth
            color={color || "primary"}
            variant="contained"
            className={className}
            disabled={disabled || loading}
            onClick={onPress}
        >
            {text}
            
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
    );
}



export default CustomButton;