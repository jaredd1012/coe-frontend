import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export function Dashboard() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
