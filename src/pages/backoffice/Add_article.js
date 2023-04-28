import { Alert, Button, Snackbar, TextField } from '@mui/material';
import './assets/Add_article_style.css';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { useState } from 'react';
import { Article_rest } from '../../services/Article_rest';
import { useNavigate } from 'react-router-dom';

export function Add_article() {

    const navigate = useNavigate();

    const [flash_message, setFlash_message] = useState({
        open_message: false,
        message: "",
        etat: false
    });

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;


    const [article, setArticle] = useState({
        title_article: "",
        adresse_image_titre: "",
        description_article: "",
        content_article: "",
        reference: ""
    })

    function handleChange(e) {

        switch (e.target.name) {
            case "title_article":
                setArticle((prev_value) => ({
                    ...prev_value,
                    title_article: e.target.value
                }))
                break
            case "adresse_image_titre":
                setArticle((prev_value) => ({
                    ...prev_value,
                    adresse_image_titre: e.target.value
                }))
                break
            case "description_article":
                setArticle((prev_value) => ({
                    ...prev_value,
                    description_article: e.target.value
                }))
                break
            case "content_article":
                setArticle((prev_value) => ({
                    ...prev_value,
                    content_article: e.target.value
                }))
                break
            case "reference":
                setArticle((prev_value) => ({
                    ...prev_value,
                    reference: e.target.value
                }))
                break

        }


    }


    function handleClick(e) {
        e.preventDefault();

        Article_rest.setArticle(
            article.title_article,
            article.adresse_image_titre,
            article.description_article,
            article.content_article,
            article.reference
        ).then((result) => {
            if (result.status === true) {
                setFlash_message({
                    open_message: true,
                    message: "Your article is published",
                    etat: true
                })
                navigate(-1)
            } else {
                setFlash_message({
                    open_message: true,
                    message: "Your article was not published",
                    etat: false
                })
            }

        })
    }

    return (
        <>
            <div class="add_article">

                <div className="content">

                    <div className='titre'>
                        <DriveFileRenameOutlineIcon fontSize='large' />
                    </div>

                    <TextField
                        id="outlined-basic"
                        label="Article title"
                        variant="outlined"
                        name="title_article"
                        onChange={handleChange}
                        value={article.title_article}

                    />
                    <TextField
                        id="outlined-basic"
                        label="Image banner adress"
                        variant="outlined"
                        name="adresse_image_titre"
                        onChange={handleChange}
                        value={article.adresse_image_titre}

                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Article description"
                        multiline
                        rows={2}
                        name="description_article"
                        onChange={handleChange}
                        value={article.description_article}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Article content"
                        multiline
                        rows={6}
                        name="content_article"
                        onChange={handleChange}
                        value={article.content_article}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="References"
                        name="reference"
                        onChange={handleChange}
                        value={article.reference}
                    />
                    <Button
                        className='input_connexion'
                        variant='contained'
                        color="error"
                        onClick={handleClick}
                    >
                        Add this Article
                    </Button>
                </div>

            </div>


            <Snackbar
                open={flash_message.open_message}
                autoHideDuration={5000}
                anchorOrigin={{ vertical, horizontal }}
            >

                <Alert
                    autoHideDuration={3000}
                    variant="filled" s
                    everity={flash_message.etat === true ? "success" : "error"}>
                    {flash_message.message}
                </Alert>


            </Snackbar>
        </>

    )
}