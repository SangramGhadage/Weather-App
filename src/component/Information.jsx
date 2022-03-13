import { Box, Typography, Grid} from "@mui/material"
import { makeStyles } from "@mui/styles"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const useStyles = makeStyles({
    component: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20',
        height: '70%',
        justifyContent: 'space between'
    },
    row: {
        padding: 10, 
        fontSize: 20,
        letterSpacing: 2,
    },
    value: {
        paddingLeft: '42px'
    },
    icon: {
        marginRight: 15,
    },
    column: {
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

const Information = ({data}) => {
    const classes = useStyles()
    return(
        data ?
        <Grid container className={classes.component}  >
            <Grid item xs={3} className={classes.column} >
            <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location <br /> <Box className={classes.value} component= "span"> {data.name},{data.sys.country}</Box></Typography>
            </Grid>
            
            <Grid item xs={3} className={classes.column}>
            <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon}/>Temprature <br /><Box className={classes.value} component= "span"> {data.main.temp}°c</Box></Typography>
            </Grid>

            <Grid item xs={3} className={classes.column}>
            <Typography className={classes.row}><OpacityIcon className={classes.icon}/>Humidity <br /> <Box className={classes.value} component= "span">{data.main.humidity}%</Box></Typography>
            </Grid>

            <Grid item xs={3} className={classes.column} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Typography className={classes.row}><WbSunnyIcon className={classes.icon}/>Sun Rise <br /> <Box className={classes.value} component= "span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
            </Grid>

            <Grid item xs={3} className={classes.column}>
            <Typography className={classes.row}><Brightness4Icon className={classes.icon}/>Sun Set <br /> <Box className={classes.value} component= "span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
            </Grid>

            <Grid item xs={3} className={classes.column}>
            <Typography className={classes.row}><DehazeIcon className={classes.icon}/>Condition <br /> <Box className={classes.value} component= "span">{data.weather[0].description}</Box></Typography>
            </Grid>

            <Grid item xs={3} className={classes.column} rowSpacing={1}>
            <Typography className={classes.row}><CloudIcon className={classes.icon}/>Clouds <br /> <Box className={classes.value} component= "span">{data.clouds.all}%</Box></Typography>
            </Grid>
        </Grid> : ''
    )
}


export default Information