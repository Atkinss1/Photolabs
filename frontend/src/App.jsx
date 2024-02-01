import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorite] = useState([]);
  
  function toggleFavorites(id) {
    setFavorite((currentFavorites) => {
      if (currentFavorites.includes(id)) {
        return currentFavorites.filter(favoriteId => favoriteId !== id);
      }
      else {
        return [...currentFavorites, id];
      }
    })
  }
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleModal = (props) => {
    const modalProps = {
      ...props,
      modal: true,
    }
    selectedPhoto ? setSelectedPhoto(null) : setSelectedPhoto(modalProps);
  }
  
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
 