import {IImage} from "./Image";

export interface IGallery {
    images: IImage[];
    title: string;
    description?: string;
    id: number;
}

export class Gallery implements IGallery {
    public images: IImage[];
    public title: string;
    public description: string;
    public id: number;

    constructor({images, title, description, id}: IGallery){
        this.images = images ?? [];
        this.title = title;
        this.description = description ?? "";
        this.id = id;
    }
}