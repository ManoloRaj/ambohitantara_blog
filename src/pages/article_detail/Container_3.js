import { Text_detail } from "./Text_detail";
import { Title_detail } from "./Title_detail";

export function Container_3(props) {
    return (
        <>
            <Title_detail
                title={props.title}

            />

            <Text_detail 
                author={props.author}
                publication_date={props.publication_date}
                publication_text={props.publication_text}
                reference={props.reference}
            />
        </>
    )
}