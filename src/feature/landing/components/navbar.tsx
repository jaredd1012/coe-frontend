import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from '../styles/landing';

export const DashboardNavigation = () => {
    const classes = useStyles();
    return (
        <ul className={classes.topNav}>
            <li>
                <Link to="/">Creat Account </Link>
            </li>
            <li>
                <Link to="login">Login</Link>
            </li>
            <li>
                <Link to="/">Help</Link>
            </li>

            <li>
                <Link to="login">Become a Seller</Link>
            </li>
        </ul>
    );
};
