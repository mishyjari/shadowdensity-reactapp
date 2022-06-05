import {Container, Image} from "react-bootstrap";
import img from "../images/DSCF0049.jpg"

export const Main = () => {
    return (
        <Container fluid className={"red-border-dev main-page body-content"}>
            <h3>Work in Progress</h3>
            <p>This will eventually be a portfolio and blog website for my photographs and artistic musings
            <br /> Its a work in progress
            <br/> (like, duh, just look at this mess, so please excuse me while I obnoxiously
                build everything from scratch instead of just using Wordpress or something.)
            </p>
            <Image fluid src={img} />
        </Container>
    )
}