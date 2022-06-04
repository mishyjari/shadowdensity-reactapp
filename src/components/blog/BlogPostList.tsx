import {useEffect, useState} from "react";
import {SampleBlogPost} from "../../samples/SampleBlogPost";
import {IBlogPost} from "../../models/BlogPost";
import {CardGroup, Container} from "react-bootstrap";
import {BlogPostPreview} from "./BlogPostPreview";

export const BlogPostList = () => {
    const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([])

    useEffect(() => {
        // TODO: Implement back end and fetch
        const posts = new SampleBlogPost().getSampleBlogPosts(10);
        setBlogPosts(posts)
    }, [])

    return (
        <Container className={"red-border-dev"}>
            {
                blogPosts.map((blogPost) => <BlogPostPreview post={blogPost} />)
            }
        </Container>
    )
}