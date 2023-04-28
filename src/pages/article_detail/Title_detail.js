import "./assets/Title_detail_style.css"

export function Title_detail(props) {

    return (
        <>
            <div className="title_detail">
                <div className="title">
                    {props.title}
                </div>

                <div className="image_title">
                    <div
                        className="img"
                    >
                        <img
                            src={props.image}
                            width="500"
                            height="322"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowfullscreen="true"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}