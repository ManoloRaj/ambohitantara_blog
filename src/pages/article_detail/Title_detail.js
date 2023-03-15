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
                        <iframe
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2F480412022100907%2Fphotos%2Fa.1053073328168104%2F1053073308168106%2F&show_text=false&width=500"
                            width="500"
                            height="322"
                            style={{ border: "none", overflow: "hidden" }}
                            scrolling="no"
                            frameborder="0"
                            allowfullscreen="true"
                        >

                        </iframe>
                    </div>
                </div>

            </div>
        </>
    )
}