import {Container} from "react-bootstrap";
import {BlogPostList} from "../components/blog/BlogPostList";

export const Blog = () => {
    return (
        <Container className={"red-border-dev body-content"}>
            <h1>Blog</h1>
            <BlogPostList />
        </Container>
    )
}