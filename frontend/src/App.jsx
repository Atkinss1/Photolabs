import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const toggleModal = (props) => {
    selectedPhoto ? setSelectedPhoto(0) : setSelectedPhoto(props);
  }
  
  return (
    <div className="App">
        <HomeRoute photos={photos} topics={topics} toggleModal={toggleModal} />
        {selectedPhoto && <PhotoDetailsModal closeDisplayModal={toggleModal} modalInfo={selectedPhoto}/>}
    </div>
  );
};

export default App;
 