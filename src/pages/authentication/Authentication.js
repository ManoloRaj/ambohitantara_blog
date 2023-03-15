import { Button, TextField } from "@mui/material";
import "./assets/Authentication_style.css";

export function Authentication() {
    return (
        <>
            <div className='form_connexion'>

                <div className='content'>

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
                        SignIn
                    </Button>

                </div>

            </div>
        </>
    )
}