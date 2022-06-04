import {IImage} from "../models/Image";

interface ISampleGallery{
    images?: IImage[];
    title: string;
    description?: string;
}

export class SampleGallery implements ISampleGallery {
    public images: IImage[];
    public title: string;
    public description: string;

    constructor({images, title, description}: ISampleGallery){
        this.images = images ?? [];
        this.title = title;
        this.description = description ?? "";
    }
}