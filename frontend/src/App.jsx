import React from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import { useApplicationData } from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const { toggleFavorites,
          toggleModal,
          favorites,
          selectedPhoto,
        } = useApplicationData();

  return (
    <div className="App">
        <HomeRoute photos={photos} 
                   topics={topics}
                   toggleModal={toggleModal}
                   favorites={favorites}
                   toggleFavorites={toggleFavorites} />
        {selectedPhoto && 
        <PhotoDetailsModal closeDisplayModal={toggleModal}
                           selectedPhoto={selectedPhoto}
                           toggleFavorites={toggleFavorites}
                           favorites={favorites}
                           toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
 