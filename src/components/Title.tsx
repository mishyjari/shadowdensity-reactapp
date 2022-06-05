import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/title.css"

export const Title = () => {
    return (
        <Container className={"red-border-dev title"}>
            <Link to={"/"} className={"title"}>
                <span className={"title-left"}>Shadow</span>
                <span className={"title-right"}>Density</span>
            </Link>
        </Container>
    )
}