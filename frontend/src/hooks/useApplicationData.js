import { useState } from "react";

export const useApplicationData =() => {

  const [favorites, setFavorite] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
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

  const toggleModal = (props) => {
    const modalProps = {
      ...props,
    }
    selectedPhoto ? setSelectedPhoto(null) : setSelectedPhoto(modalProps);
  }

  return { 
    toggleFavorites,
    toggleModal,
    favorites,
    selectedPhoto
  };
}