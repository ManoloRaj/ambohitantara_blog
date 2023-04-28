import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import "./assets/User_profile_style.css";
import { Role_rest } from '../../services/Role_rest';

export function User_profile() {

    const [user, setUser] = useState({
        name_user: "",
        adress: "",
        id_role: ""
    })

    const [roleList, setRoleList] = useState([])

    useEffect(() => {
        Role_rest.roleList().then((result) => {
            setRoleList(result.data)
        })
    }, [])

    function handleChange(e) {
        switch (e.target.name) {
            case "name_user":
                setUser((prev_value) => ({
                    ...prev_value,
                    name_user: e.target.value
                }))
                break
            case "adress":
                setUser((prev_value) => ({
                    ...prev_value,
                    adress: e.target.value
                }))
                break

            case "id_role":
                setUser((prev_value) => ({
                    ...prev_value,
                    id_role: e.target.value
                }))
                break


        }

    }


    function handleCick() {

    }
    return (
        <>
            <div className="user_profile">

                <div className="content">

                    <div className='titre'>
                        <DriveFileRenameOutlineIcon fontSize='large' />
                    </div>

                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="name_user"
                        onChange={handleChange}
                        value={user.name_user}

                    />
                    <TextField
                        id="outlined-basic"
                        label="Adress"
                        variant="outlined"
                        name="adresse_image_titre"
                        onChange={handleChange}
                        value={user.adress}

                    />
                    <FormControl sx={{ width: "100%" }} size="medium">
                        <InputLabel id="demo-select-small">Role</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={user.id_role}
                            name="id_role"
                            label="Role"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                roleList !== [] &&
                                roleList !== undefined &&
                                roleList.map((result) => {
                                    return (
                                        <MenuItem value={result.id_role}>
                                            <em>{result.role_name}</em>
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>

                    <Button
                        className='input_connexion'
                        variant='contained'
                        color="error"
                        onClick={handleCick}
                    >
                        Add this Article
                    </Button>
                </div>

            </div>
        </>
    )
}