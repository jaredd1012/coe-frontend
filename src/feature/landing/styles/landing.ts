import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    loginpanelWrapper: {
        backgroundColor: '#fff',
        color: '#444',
        maxWidth: 504,
        borderRadius: 4,
    },
    paper: {
        marginTop: '12rem',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h5': {
            color: '#555',
        },
    },
    searchInput: {
        width: 504,
        height: 100,
        '& input': {
            color: '#555',
            textShadow: '0 1px #FFF',
            border: '2px solid #efefef',
            borderRadius: '4px',
            outline: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            width: 504,
        },
    },
    topNav: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        '& li': {
            listStyle: 'none',
            padding: '10px 20px',
            margin: '0 10px',
            '& a': {
                color: '#6D6D6D',
                textDecoration: 'none',
            },
        },
    },
}));
