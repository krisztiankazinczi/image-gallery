import React from 'react';
import GalleryPage from './pages/galleryPage';
import { IMAGES_API_URL } from './constants';

/*
  This is a quiet simple app, but I wanted to do it as I would do in a real project, so I splitted it as much as I thought it's reasonable.
  Otherwise I could wrote everything in this file, but that is not clean
  And if we want to extend this app, then it's easily extendable with this structure I used.

  This is my first React project with Typescript, so it is possible that there are some mistakes in types, but I did all I can

  At this point App component only import and render GalleryPage component
  But it's generic, so if it gets an other url which provides the same data structure, then it can show different Image Galleries as well
*/

const App: React.FC = () => {
  return (
    <GalleryPage url={IMAGES_API_URL} />
  );
}

export default App;
