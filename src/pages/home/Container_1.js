import { Page_adress } from "../micro_component/Page_adress";
import "./assets/Container_1_style.css";

export function Container_1() {
    return (
        <>
            <div className="container_1">

                <div className="image_1">

                    <Page_adress
                        first_adress="Home"
                        second_adress="Editor forum"
                    />

                    <div className="titre">
                        Ambohitantara blog
                    </div>
                    <div className="banner_2">
                        <div className="page_description">
                            Created in January 2023 by Manolo RAJAONAH and Jaona RANDRIANANDRASANA,
                            it is to Promote MALAGASY culture and trades.
                            Madagascar is a vast island in Indian ocean. This BLOG is a platform to
                            present all hide and seen aspect of Madagascar HISTORY, ANTHROPOLOGY
                            TRADES, CUSTOMS, PHOTOS
                        </div>

                        <div className="titre_page">
                            MOST READED PAGES
                        </div>
                    </div>
                    <div>

                    </div>
                </div>


            </div>


        </>
    )
}