import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Title = () => {
    return (
        <Container className={"red-border-dev"}>
            <Link to={"/"} className={"text-decoration-none link-dark"}><h3>ShadowDensity</h3></Link>
        </Container>
    )
}