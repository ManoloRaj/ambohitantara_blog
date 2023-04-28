import { Button, TextField } from "@mui/material";
import "./assets/Authentication_style.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';

export function Authentication() {
    return (
        <>
            <div className='form_connexion'>

                <div className='content'>
                    <div className="titre">
                        <HowToRegIcon fontSize="large"/>
                    </div>
                    <TextField
                        className='input_connexion'
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                    />

                    <TextField
                        className='input_connexion'
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />

                    <Button
                        className='input_connexion'
                        variant='contained'
                        color="error"
                    >
                        Log In
                    </Button>

                </div>

            </div>
        </>
    )
}