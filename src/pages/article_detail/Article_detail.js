import { useParams } from "react-router-dom";
import { Page_adress } from "../micro_component/Page_adress";
import "./assets/Article_detail_style.css";
import { Container_3 } from "./Container_3";
import { useEffect, useState } from "react";
import { Article_rest } from "../../services/Article_rest";

export function Article_detail() {

    const params = useParams();
    const [article, setArticle] = useState({})

    useEffect(() => {
        Article_rest.getOneArticle(params.id_article).then((result) => {
            setArticle(result.data)
        })
    }, [params.id_article])

    return (
        <>
            <div className="article_detail">
                <Page_adress
                    first_adress="Detail"
                    second_adress="Avarabary"
                />

                <Container_3

                    image={article.adresse_image_titre}

                    title={article.title_article}

                    author={article.name_user}

                    publication_date={article.publication_date_article}

                    publication_text={article.content_article}

                    reference={article.reference}
                />
            </div>
        </>
    )
}