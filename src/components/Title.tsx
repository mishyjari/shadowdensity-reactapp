import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/title.css"

export const Title = () => {
    return (
        <Container className={"red-border-dev"}>
            <h3 className={"title justify-content-center"}>
                <span className={"title-left"}>Shadow</span>
                <span className={"title-right"}>Density</span>
            </h3>
        </Container>
    )
}