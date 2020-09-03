import React, { useState, useCallback } from 'react';
import {
    CssBaseline,
    Container,
    Paper,
    Typography,
} from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import LanguageHelper from '../../../helpers/LanguageHelper';
import ApiHelper from '../../../helpers/ApiHelper';
import { TextField, Button } from '../../../components';


/**
 * Login page of the application
 */
const Login = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const language = LanguageHelper.getLanguage();
    const history = useHistory();

    /**
     * Change language of the system
     * Redirect to main route because system need to run new language strings
     */
    const changeLanguage = useCallback((lang) => {
        LanguageHelper.setLanguage(lang);
        history.push('/');
    }, [history]);

    /**
     * Send login request and show result
     */
    const handleLogin = useCallback(async () => {
        setLoading(true);
        const data = {
            username,
            password,
            grant_type: "password"
        };
        const response = await ApiHelper.post('token', data, 2); // 2 is 'application/x-www-form-urlencoded'
        setLoading(false);
    }, [username, password]);

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.options}>
                    <div className={classes.language}>
                        <label className={classes.label}
                            onClick={() => changeLanguage("tr")}
                        >TR</label>
                        <label className={classes.label}>  / </label>
                        <label className={classes.label}
                            onClick={() => changeLanguage("en")}
                        >EN</label>
                    </div>
                </div>
                <div className={classes.content}>
                    <Typography className={classes.header} variant="h5">
                        ParkSmart
                    </Typography>
                    <Container component="main" maxWidth="sm">
                        <CssBaseline />
                        <Paper item
                            //onKeyDown={handleKeyDown} 
                            className={classes.paper}>
                            <form className={classes.form} noValidate>
                                <TextField
                                    required
                                    label={language.login.email}
                                    autoFocus
                                    onChange={username => setUsername(username)}
                                />
                                <TextField
                                    className={classes.button}
                                    required
                                    label={language.login.password}
                                    type="password"
                                    onChange={password => setPassword(password)}
                                />

                                <Button
                                    className={classes.button}
                                    text={language.login.signin}
                                    loading={loading}
                                    onClick={handleLogin}
                                />
                            </form>
                        </Paper>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default Login;