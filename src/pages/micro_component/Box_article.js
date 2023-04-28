import "./assets/Box_article_style.css";

export function Box_article(props) {
    return (
        <>
            <div className="box">
                <div className="image_1">
                    <img src={props.image} />
                </div>

                <div className="text">
                    <div className="titre">
                        {props.title}
                    </div>
                    <div className="author">
                        {props.author}
                    </div>
                    <div className="little_description">
                        {props.description} see more
                    </div>
                </div>

            </div>
        </>
    )
}