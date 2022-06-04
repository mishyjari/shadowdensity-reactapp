import {IImage, Image} from "../models/Image"
import {faker} from "@faker-js/faker";

interface ISampleImage {
}

export class SampleImage {
    static getSampleImage = () => {
        return new Image({
            displayUrl: faker.image.nature(1600, 1200),
            fullResolutionUrl: faker.image.nature(3200, 2400),
            thumbnailUrl: faker.image.nature(300, 200),
            tags: [],
            description: faker.lorem.words(20),
            title: faker.word.noun(),
            id: Math.floor(Math.random()*1000)
        })
    }

    static getSampleImages = (numberOfImages: number) => {
        const images: IImage[] = [];
        for (let i=0; i<numberOfImages; i++){
            images.push(this.getSampleImage())
        }
        return images;
    }
}