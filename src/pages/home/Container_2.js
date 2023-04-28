import avarabary from "./assets/images/avarabary.jpg";
import antsahadinta from "./assets/images/Image4.jpg";

import "./assets/Container_2_style.css";
import { Box_article } from "../micro_component/Box_article";
import { Link } from "react-router-dom";
import { Article_rest } from "../../services/Article_rest";
import { useEffect, useState } from "react";

export function Container_2() {

    const [article_list, setArticle_list] = useState([]);
    useEffect(() => {
        Article_rest.articleList().then((result) => {
            setArticle_list(result.data);
        })
    }, [])

    return (
        <>
            <div className="container_2">

                {article_list.map((result) => {
                    return (
                        <>
                            <Link to={"/article_detail/"+result.id_article}>
                                <Box_article
                                    image={result.adresse_image_titre}
                                    title={result.title_article}
                                    author="By Manolo RAJAONAH and Jaona RANDRIANANDRASANA"
                                    description={result.description_article}
                                />

                            </Link>
                        </>
                    )
                })}


                {/* <Link to="article_detail">
                    <Box_article
                        image={antsahadinta}
                        title="Antsahadinta"
                        author="By Manolo RAJAONAH and Jaona RANDRIANANDRASANA"
                        description="One of the 12 Sacred Hill, Antsahadinta still an alive place to visit."
                    />

                </Link> */}


            </div>
        </>
    )
}