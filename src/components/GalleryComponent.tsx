import {Container} from "react-bootstrap";
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {IImage} from "../models/Image";
import {useCallback, useState} from "react";
import {IGallery} from "../models/Gallery";
import lightGallery from "lightgallery";

interface IGalleryComponentProps {
    gallery: IGallery;
}

export const GalleryComponent = ({gallery}: IGalleryComponentProps) => {
    return (
        <Container className={"red-border-dev body-content"}>
            <h3>{gallery.title}</h3>
            <p>{gallery.description}</p>
            <LightGallery
                fullScreen={true}

                plugins={[lgThumbnail, lgZoom]}
            >
                {
                    gallery.images.map(image => (
                        <a href={image.displayUrl} className={"gallery-item"} key={image.id}>
                            <img alt={image.title} src={image.thumbnailUrl}/>
                        </a>
                    ))
                }
            </LightGallery>
        </Container>
    )
}