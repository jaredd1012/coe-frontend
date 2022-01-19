/* Framework */
import React from 'react';
import { Typography, Container, CssBaseline, Avatar, MuiThemeProvider, TextField } from '@material-ui/core';

/* Data */
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { connect } from 'react-redux';
import { AuthModule } from '../../../shared/auth/module/module';

/* UI Components */
import { DashboardNavigation } from '../components/navbar';
import { fetchLoginAsync } from '../../../shared/auth/actions/actions';

import { useStyles } from '../styles/landing';
import { landingtheme } from '../styles/landingtheme';

interface LoginProps {
    login: typeof fetchLoginAsync.request;
}

function Login(props: LoginProps) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MuiThemeProvider theme={landingtheme}>
                <Container component="main" maxWidth="xl">
                    <DashboardNavigation></DashboardNavigation>
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h5" variant="h5">
                            Landing Search
                        </Typography>
                        <div className={classes.searchInput}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" />
                        </div>
                    </div>
                </Container>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const dispatchToProps = {
    login: fetchLoginAsync.request,
};

const ConnectedLogin = connect(undefined, dispatchToProps)(Login);

export const LandingSearchContainer = () => (
    <DynamicModuleLoader modules={[AuthModule]}>
        <ConnectedLogin></ConnectedLogin>
    </DynamicModuleLoader>
);
