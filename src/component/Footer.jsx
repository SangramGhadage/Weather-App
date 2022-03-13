import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    copyright: {
        width: '100%',
        background: '#f8f9fa',
        color: '#000',
        textAlign: 'center'
    }
})

const Footer = () => {

    const classes = useStyle();
    return (
        <Box className={classes.copyright} 
            style={{
           
                height: 50,
    
            }}
        >&#169;2022 All Rights Are Reserved
        </Box>
    )
}


export default Footer;