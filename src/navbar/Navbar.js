import { Link, Outlet } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './assets/Navbar_style.css';
import { Button, ClickAwayListener, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export function Navbar() {

    const [open_new_article, setOpen_new_article] = useState(false)



    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }));


    function handleClick_open_new_article() {

        setOpen_new_article(true)
    }
    function handleClick_close_new_article() {

        setOpen_new_article(false)
    }



    return (
        <>
            <div className='navbar'>
                <div className='titre_page'>
                    Vohitra tantara
                </div>
                <ul>
                    <Link to="/home">

                        <li className='active'>
                            Home
                        </li>
                    </Link>
                    <li>
                        About
                    </li>


                </ul>


            </div>

            <div className='banner'>
                AMBOHITANTARA BLOG
            </div>

            <div
                className='connexion_add'
            >
                <Link to="/authentication">
                    <AccountCircleIcon
                        fontSize='large'
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "100%"
                        }} />

                </Link>

            </div>

            <div
                className='connexion_add'
                style={{
                    transform : "translateY(60px)"
                }}
            >
                <Link to="/add_article">
                    <AppRegistrationIcon
                        fontSize='large'
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "100%"
                        }} />

                </Link>

            </div>

            


            <Outlet />
        </>
    )
}
