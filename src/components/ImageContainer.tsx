// imports from libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';

// Interfaces imports
import { FilteredImageObject } from '../interfaces/ImageObject';

// Component imports
import Image from './Image';

interface Props {
    images: FilteredImageObject[],
    showPieces: number,
    padding: string,
    width: string
}

// This Component renders oll the images in a grid layout what was passed by props
const ImageContainer: React.FC<Props> = ( { images, showPieces, padding, width } ) => {
  return (
    <Grid container spacing={3} style={{ padding, width }}>
      {images.map((image, id) => {
        return (id <= showPieces) 
          ?
            (
              <Image 
                key={`image-${image.albumId}-${id}`}
                image={image}
                largeSize={4}
                mediumSize={6}
                smallSize={12}
              />
            ) 
          : 
            ""  
      })}
    </Grid>
  );
}

export default ImageContainer;
