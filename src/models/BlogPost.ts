import {IImage} from "./Image";

export interface IBlogPost {
    title: string;
    body: string;
    tags?: string[];
    images?: IImage[];
    createdAt: Date;
    modifiedAt?: Date;
}

export class BlogPost implements IBlogPost {
    public title: string;
    public body: string;
    public tags?: string[];
    public images?: IImage[];
    public createdAt: Date;
    public modifiedAt?: Date;

    constructor (props: IBlogPost) {
        this.title = props.title;
        this.body = props.body;
        this.tags = props.tags ?? [];
        this.images = props.images ?? []
        this.createdAt = props.createdAt;
        this.modifiedAt = props.modifiedAt;
    }
}