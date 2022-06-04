import {Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

export const Navigation = () => {
    return (
        <Container className={"navigation red-border-dev"}>
            <Nav variant={"tabs"} className={"justify-content-center"}>
                <Nav.Item><Link to={"/blog"} className={"nav-link link-dark"}>Blog</Link></Nav.Item>
                <Nav.Item><Link to={"/photographs"} className={"nav-link link-dark"}>Photographs</Link></Nav.Item>
                <Nav.Item><Link to={"/about"} className={"nav-link link-dark"}>About</Link></Nav.Item>
            </Nav>
        </Container>
    )
}