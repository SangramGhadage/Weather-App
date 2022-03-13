
import { Box,TextField, Button, } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { getData } from "../services/api";
import Information from "./Information";

const useStyles = makeStyles({
    component: {
        padding: 10,
        borderRadius: '20px 20px 0 0',
        textAlign: 'center',
    },
    input: {
        color: '#fff',
        marginRight: 15
    },
    button: {
        width: 200,
        height: 50,
        paddingTop: 200
    }
})

const Form = () =>{
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('')
    const [click, handleClick] = useState(false)
    useEffect(() =>{
        const getWeather = async () => {
            city && await getData(city, country).then(response =>{
                getWeatherData(response.data)
                console.log(response.data);
            });
        }
        getWeather();
        handleClick(false)
    }, [click])

    const handleCityChange = (value) => {
        setCity(value)
    }
    const handleCountryChange = (value) => {
        setCountry(value)
    }
    return(
        <>
            <Box className={classes.component}>
                <TextField label="Enter City" variant="standard" 
                    InputProps={{className: classes.input}} 
                    onChange= {(e) => handleCityChange(e.target.value)}
                    
                />
                <TextField label="Enter Country" variant="standard" 
                    InputProps={{className: classes.input}} 
                    onChange= {(e) => handleCountryChange(e.target.value)}

                />
                <Button variant="contained" className={classes.button}
                style={{
                    background: '#061b6c',
                    color: '#fff',
                    width: 200,
                    height: 50,
                    margin: 10
            
                }}
                onClick = {() => handleClick()}
                >Get Weather</Button>
            </Box>
            <Information data={data}/>
        </>
    )
}

export default Form