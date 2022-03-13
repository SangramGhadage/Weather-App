import {Box} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '65%',
        margin: '0 auto',
       
    },
    container: {
        height: '80%',
        width: '100%',
        borderRadius: '20px ',
        boxShadow: '4px 8px 13px grey'
    }
})

const Weather = () => {
    const classes = useStyles();
    return(
        <Box className={classes.component}>
            <Box className={classes.container}>
                <Form/>
            </Box>
        </Box>
    )
}

export default Weather;