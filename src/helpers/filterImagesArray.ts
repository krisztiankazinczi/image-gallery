import { ImageObject, FilteredImageObject } from "../interfaces/ImageObject";
import { ALBUM_SIZE } from '../constants';

export default function filterImagesArray (images: ImageObject[]): FilteredImageObject[] {
  let filteredImages: FilteredImageObject[] = []; // collect the proper images in this array
  let albumId = 1; // this is an iterable value
  // this will ensure that only 1 picture extracted from an albumId

  // since the API provides much more pictures than we need, I have to collect the proper ones
  images.forEach((image, id) => {
    // we need only ALBUM_SIZE pieces of pictures
    if (albumId <= ALBUM_SIZE) {
      // We need the first picture with an even id from an albumId
      if (id % 2 !== 0 && albumId === image.albumId) {
        // if the condition true, albumID is increased, 
        // it ensure that the function collect only 1 picture related to an albumId
        albumId += 1;
        // the API provides more property, than I need in this app, 
        // so the unnecessary properties are filtered out with this function
        const mappedImage = mappedImageValues(image);
        filteredImages.push(mappedImage);
      }
    }
    // if the if conditions are not true, the loop won't do anything
  });

  return filteredImages;
  
}

// function returns only the needed properties of an ImageObject
function mappedImageValues(image: ImageObject): FilteredImageObject {
  return { 
    albumId: image.albumId,
    id: image.id,
    url: image.url,
    title: image.title
  }
}