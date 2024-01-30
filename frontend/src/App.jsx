import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';

// const photos = new Array(3).fill().map((_, index) => ({ ...sampleDataForPhotoListItem, id: index + 1 }));

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
        ))} */}
        <PhotoList />
    </div>
  );
};

export default App;
 