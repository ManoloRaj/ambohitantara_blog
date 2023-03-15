import "./assets/Text_detail_style.css";

export function Text_detail(props) {
    return (
        <>
            <div className="text_detail">

                <div className="up">
                    <div className="author">
                        {props.author}
                    </div>
                    <div className="publication_date">
                        {props.publication_date}
                    </div>
                </div>

                <div className="content">
                    {props.publication_text}
                </div>

                <div className="references">
                    <div className="title_reference">
                        References
                    </div>
                    <div className="content_reference">
                        {props.reference}
                    </div>
                </div>
            </div>



        </>
    )
}