export interface IImage {
    fullResolutionUrl?: string;
    displayUrl: string;
    thumbnailUrl?: string;
    title?: string;
    description?: string;
    tags?: string[];
    id: number;
}

export class Image implements IImage {
    public description?: string;
    public displayUrl: string;
    public fullResolutionUrl?: string;
    public tags?: string[];
    public thumbnailUrl?: string;
    public title?: string;
    public id: number;

    constructor(props: IImage){
        this.displayUrl = props.displayUrl;
        this.description = props.description || "";
        this.fullResolutionUrl = props.fullResolutionUrl;
        this.tags = props.tags || [];
        this.thumbnailUrl = props.thumbnailUrl;
        this.title = props.title || "";
        this.id = props.id;
    }
}