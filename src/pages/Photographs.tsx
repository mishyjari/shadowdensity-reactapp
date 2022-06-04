import {Container} from "react-bootstrap";
import {Gallery, IGallery} from "../models/Gallery";
import {useEffect, useState} from "react";
import {SampleImage} from "../samples/SampleImage";
import {GalleryComponent} from "../components/GalleryComponent";

export const Photographs = () => {
    const [galleries, setGalleries] = useState<IGallery[]>([])

    useEffect(() => {
        // TODO: Implement Gallery Backend and Fetch
        const sampleGallery = new Gallery({
            images: SampleImage.getSampleImages(20),
            title: "Nature",
            description: "Nature images from FakerJS",
            id: Math.floor(Math.random()*1000)
        })
        setGalleries([sampleGallery])
    }, [])

    return (
        <Container className={"red-border-dev"}>
            <h1>Photographs</h1>
            {
                galleries.map((gallery) => {
                    return <GalleryComponent gallery={gallery} key={gallery.id} />
                })
            }
        </Container>
    )
}