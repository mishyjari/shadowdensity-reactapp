import {Container, Nav} from "react-bootstrap";
import {Link} from "react-router-dom"

export const Navigation = () => {
    return (
        <Container className={"navigation red-border-dev"}>
            <Nav variant={"tabs"} className={"justify-content-center"}>
                <Nav.Item><Link to={"/blog"} className={"nav-link link-dark"}>Blog</Link></Nav.Item>
                <Nav.Item><Link to={"/gallery"} className={"nav-link link-dark"}>Gallery</Link></Nav.Item>
                <Nav.Item><Link to={"/about"} className={"nav-link link-dark"}>About</Link></Nav.Item>
            </Nav>
        </Container>
    )
}

//<ul className={"nav"}>
//                 <li className={"nav-item"}><Link to={"/contact"} className={"nav-link link-light"}>Blog</Link></li>
//                 <li className={"nav-item"}><Link to={"/gallery"} className={"nav-link link-light"}>Gallery</Link></li>
//                 <li className={"nav-item"}><Link to={"/about"} className={"nav-link link-light"}>About</Link></li>
//             </ul>