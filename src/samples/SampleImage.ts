import {IImage, Image} from "../models/Image"
import {faker} from "@faker-js/faker";

interface ISampleImage {
}

export class SampleImage {

    static getSampleImage = () => {
        const shouldFlip = Math.floor(Math.random()*100)%2 === 0;

        return new Image({
            displayUrl: faker.image.nature(shouldFlip ? 1600 : 1200, shouldFlip ? 1200 : 1600, true),
            fullResolutionUrl: faker.image.nature(shouldFlip ? 3200 : 1600, shouldFlip ? 1600 : 3200, true),
            thumbnailUrl: faker.image.nature(shouldFlip ? 400 : 300, shouldFlip ? 300 : 400, true),
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