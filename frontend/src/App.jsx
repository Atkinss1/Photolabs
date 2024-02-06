import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import { useApplicationData } from 'hooks/useApplicationData';

// Rendering Home Page || Modal If User Has Selected A Photo

const App = () => {

  const { toggleFavorites,
          toggleModal,
          photosByTopic,
          returnHome,
          displayFavorites,
          state
        } = useApplicationData();
        
  return (
    <div className="App">
        <HomeRoute photos={state.hasFavorites ? state.favorites : state.photoData} 
                   topics={state.topicData}
                   displayFavorites={displayFavorites}
                   toggleModal={toggleModal}
                   favorites={state.favorites}
                   toggleFavorites={toggleFavorites}
                   photosByTopic={photosByTopic}
                   disableBackgroundClick={state.displayModal}
                   returnHome={returnHome} />
        {state.displayModal &&
        <PhotoDetailsModal closeDisplayModal={toggleModal}
                           photos={state.photoData}
                           selectedPhoto={state.selectedPhoto}
                           toggleFavorites={toggleFavorites}
                           favorites={state.favorites}
                           toggleModal={toggleModal}
                           hasFavorites={state.hasFavorites} />}
    </div>
  );
};

export default App;
 