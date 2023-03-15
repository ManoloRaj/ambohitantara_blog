import "./assets/Page_adress_style.css";

export function Page_adress(props) {

    return (
        <>
            <div className="adr_page">
                <div className="main">
                    {props.first_adress}
                </div>
                <div className="main_2">
                    {props.second_adress}
                </div>
            </div>
        </>
    )
}