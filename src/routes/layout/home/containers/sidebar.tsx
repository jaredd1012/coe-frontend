/* Framework */
import React from 'react';
import {
    IconButton,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MuiThemeProvider,
    ListItemAvatar,
    Avatar,
} from '@material-ui/core';
import clsx from 'clsx';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

/* Data */
import { connect } from 'react-redux';

/* UI Components */
import { useStyles } from '../styles/layout';
import { LayoutModule } from '../module/module';
import { LayoutRootType } from '../types';
import { toggleSidebar } from '../actions/actions';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { sidebarTheme } from '../styles/sidebarTheme';

interface SidebarProps {
    open: boolean;
    toggleOpen: typeof toggleSidebar;
    name: string;
}

function Sidebar(props: SidebarProps) {
    const { open, toggleOpen } = props;
    const classes = useStyles();
    const toggleDrawer = () => {
        toggleOpen();
    };
    const selectedMenu = 'Inbox';
    const menus = (
        <React.Fragment>
            <ListItem alignItems="flex-start" className={classes.toolbar}>
                <ListItemText primary="2ndSun" />
                <div className={classes.toolbar}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
            </ListItem>
            <Divider />
            <List>
                {['Dashboard', 'WatchList', 'Templates', 'Settings'].map((text, index) => (
                    <ListItem button key={text} selected={selectedMenu === text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <MuiThemeProvider theme={sidebarTheme}>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    {menus}
                </Drawer>
            </MuiThemeProvider>
        </React.Fragment>
    );
}

const mapStateToProps = (state: LayoutRootType) => {
    return {
        name: state.authState.name,
        open: state.layoutState.sidbarOpened,
    };
};

const dispatchToProps = {
    toggleOpen: toggleSidebar,
};

const ConnectedSidebar = connect(mapStateToProps, dispatchToProps)(Sidebar);

export const SidebarContainer = () => (
    <DynamicModuleLoader modules={[LayoutModule]}>
        <ConnectedSidebar></ConnectedSidebar>
    </DynamicModuleLoader>
);
