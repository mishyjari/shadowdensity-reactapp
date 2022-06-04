import {IBlogPost} from "../../models/BlogPost";
import {Card, Button} from "react-bootstrap";
const {truncate} = require("underscore.string")

interface IBlogPostPreviewProps {
    post: IBlogPost;
}

export const BlogPostPreview = ({post}: IBlogPostPreviewProps) => {
    return (
        <Card>
            <Card.Header>{post.createdAt.toDateString()}</Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {truncate(post.body, 500)}
                </Card.Text>
                <Button variant="primary">Continue Reading</Button>
            </Card.Body>
        </Card>
    )
}