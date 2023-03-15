import avarabary from "./assets/images/avarabary.jpg";
import antsahadinta from "./assets/images/Image4.jpg";

import "./assets/Container_2_style.css";
import { Box_article } from "../micro_component/Box_article";
import { Link } from "react-router-dom";

export function Container_2() {
    return (
        <>
            <div className="container_2">

                <Link to="article_detail">

                    <Box_article
                        image={avarabary}
                        title="Hidding village : Mahitsiarivo Avarabary"
                        author="By Manolo RAJAONAH and Jaona RANDRIANANDRASANA"
                        description="Avarabary is one of Malagasy Andriana Hills, there are many
                    marks that demonstate this."
                    />
                </Link>

                <Link to="article_detail">
                    <Box_article
                        image={antsahadinta}
                        title="Antsahadinta"
                        author="By Manolo RAJAONAH and Jaona RANDRIANANDRASANA"
                        description="One of the 12 Sacred Hill, Antsahadinta still an alive place to visit."
                    />

                </Link>


            </div>
        </>
    )
}