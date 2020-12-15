// imports from libraries
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// interfaces imports
import { FilteredImageObject } from '../interfaces/ImageObject';
import HttpResponse from '../interfaces/HttpResponse';
import { ImageObject } from '../interfaces/ImageObject'

// Component imports
import ImageContainer from '../components/ImageContainer';
import LoadingUI from '../components/LoadingUI';
import ShowError from '../components/ShowError';

// Some function or constant imports
import { SHOW_MORE_PICTURES } from '../constants';
import fetchData from '../helpers/fetchData';
import filterImagesArray from '../helpers/filterImagesArray';


interface Props {
  url: string;
}


const GalleryPage: React.FC<Props> = ( { url } ) => {
  const [images, setImages] = useState<FilteredImageObject[]>([]);
  const [showPieces, setShowPieces] = useState(9); 
  // it's 9 at the beginning, since I want to show initially the first 10 pictures
  const [errorMsg, setErrorMsg] = useState(""); 
  // if there is any error, this message will be show to the user

  useEffect(() => {
    // since an external async function is called here, I had to create a function here
    // since I can not make useEffect hook to async directly
    async function fetchAPI(url: string) {
      let response: HttpResponse<ImageObject[]>; // it's only the type of HttpResponse.parsedBody key!!!!
      try {
        response = await fetchData<ImageObject[]>(url); // have to define the type since httpResponse is a generics
        if (response.parsedBody?.length) { 
          // with this function the proper pictures are filtered out with the proper keys
          const filteredImages = filterImagesArray(response.parsedBody);
          // set the useState hook with the downloaded picture data
          setImages(filteredImages);
        }
      } catch (response) {
        setErrorMsg(response.message)
      }
    }

    // here I call the async function in a useEffect hook
    fetchAPI(url);

    // It is the basic, much more simple way how I can get the data from the API
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(res => res.json())
    //   .then(response => {
    //     const filteredImages = filterImagesArray(response);
    //     console.log(filteredImages);
    //     setImages(filteredImages);
    //   })
    // .catch(err => {
    //   setErrorMsg(err.message)
    // });

  }, [url]);


  const handleClick = () => {
    // if all the pictures are shown, this function returns immediately
    if (showPieces === images.length - 1) return;
    // if it is possible to display 10 more pictures, the showPieces will get a new value
    if (showPieces + SHOW_MORE_PICTURES < images.length) {
      setShowPieces(showPieces + SHOW_MORE_PICTURES);
    } else {
      // if all the pictures are not visible, but if we would increase the setShowPieces with 10
      // that would be more than the maximum number of pictures, then I set the showPieces to the maximum value as possible
      // without this it would work, but with this it's much more generic function
      setShowPieces(images.length)
    }
  }

  if (errorMsg) {
    return <ShowError errorMsg={errorMsg} />
  }

// if there is no picture object in images array and there is no any error then
// a Spinner shows that something is loading
  if (!images.length && !errorMsg) {
    return <LoadingUI />
  } else {
    // Once the pictures have been loaded, this code will show the pictures to the users
    return (
      <div>
        <Grid container alignItems="center" justify="center">
          <h1>Image Gallery</h1>
        </Grid>
        <ImageContainer 
          images={images} 
          showPieces={showPieces} 
          padding="3vw" 
          width="100%" 
        />
        {/* If all the pictures are visible, then the show more button will not be visible anymore */}
        {
          showPieces !== images.length - 1 && (
            <Grid container alignItems="center" justify="center">
              <Button variant="contained" color="primary" size="large" onClick={handleClick}>
                Show {SHOW_MORE_PICTURES} more pictures
              </Button>
            </Grid>
          )
        }
      </div>
    );
  }

}

export default GalleryPage;