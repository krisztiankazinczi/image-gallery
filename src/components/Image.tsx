// imports from libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';

// Interface imports
import { FilteredImageObject } from '../interfaces/ImageObject';

interface Props {
    image: FilteredImageObject,
    largeSize: any,
    mediumSize: any,
    smallSize: any
}

// This Component renders 1 image into a Grid Container
// 3 other props are passed as well - this will define the exact grid layout for different devices
// largeSize tells how many columns (12 / largeSize) will be visible in Grid Container in case of Desktop devices
// mediumSize tells how many columns (12 / mediumSize) will be visible in Grid Container in case of Tablet devices
// smallSize tells how many columns (12 / smallSize) will be visible in Grid Container in case of small devices
// because this component get these values, it's generic, so easily usable in an other component, and different Grid layout easily achievable
const Image: React.FC<Props> = ( {image, largeSize, mediumSize, smallSize} ) => {
  return (
    <Grid item lg={largeSize} md={mediumSize} sm={smallSize}>
      <img src={image.url} alt={image.title} style={{ width: '100%', height: 'auto' }} />
    </Grid>
  );
}

export default Image;
