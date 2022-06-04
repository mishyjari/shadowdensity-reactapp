import { faker } from '@faker-js/faker';
import {BlogPost, IBlogPost} from "../models/BlogPost";
import {IImage} from "../models/Image";

export interface ISampleBlogPost {

}

export class SampleBlogPost implements ISampleBlogPost {
    getSingleSampleBlogPost = () => {
        const randBool = Math.floor(Math.random()*100)%2 ? true : false;

        const title = `${faker.word.adjective()} ${faker.word.preposition()} ${faker.word.noun()}`;
        const createdAt = faker.date.past(5);
        const body = `${faker.lorem.lines(Math.floor(Math.random()*100))}`
        const images: IImage[] = [];
        const tags: string[] = [];
        const modifiedAt = randBool ? faker.date.future(5, createdAt) : undefined;

        return new BlogPost({
            body,
            createdAt,
            images,
            modifiedAt,
            tags,
            title
        });
    }

    getSampleBlogPosts = (numberOfPosts: number) => {
        const posts: IBlogPost[] = []
        for (let i=0; i<numberOfPosts; i++){
            posts.push(this.getSingleSampleBlogPost())
        }
        return posts;
    }
}