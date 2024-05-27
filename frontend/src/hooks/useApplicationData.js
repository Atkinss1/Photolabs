import { useReducer, useEffect } from "react";
import axios from "axios";
import { initialState, ACTIONS, projectReducer } from "reducer/projectReducer";

export const useApplicationData =() => {

  const [state, dispatch] = useReducer(projectReducer, initialState);

  useEffect(() => {
     async function getPhotos() {
      try {
        const response = await axios.get('/api/photos');
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: response.data});
      } catch (error) {
        console.error(error);
      }
     }

     async function getTopics() {
      try {
        const response = await axios.get('/api/topics');
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: response.data});
      }
      catch (error) {
        console.error(error);
      }
     }

     getPhotos();
     getTopics();
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 150,
      behavior: "auto"
    });
  }, [state.selectedPhoto]
  )
  
  async function returnHome() {
    try {
      const response = await axios.get('/api/photos');
      dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: response.data});
      dispatch({type: ACTIONS.UPDATE_HAS_FAVORITE_STATE, payload: false});
    } catch (error) {
      console.error(error);
    }
   }
   
  async function photosByTopic(id) {
    try {
      const response = await axios.get(`/api/topics/photos/${id}`);
      dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data});   
    }
    catch (error) {
      console.error(error);
    }
  }
  
  function toggleFavorites(photo) {
    const isFavorite = state.favorites.some((favorite) => favorite.id === photo.id);
       if (isFavorite) {
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo});
        if (state.favorites.length <= 1) {
          dispatch({type: ACTIONS.UPDATE_HAS_FAVORITE_STATE, payload: false});
        }
      } else {

        console.log('this is toggleFavorites', isFavorite);
        dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photo});
      }
    }
    
  function toggleModal(props) {
    
    if (props === undefined) {
      dispatch({type: ACTIONS.CLOSE_MODAL, payload: false});
      
      // If modal isn't opened, allow scrolling
      
      if (typeof window !== 'undefined' && window.document) {
        document.body.style.overflow = 'visible';
      }
    } else {
      const selectedPhoto = state.hasFavorites ?  
      ( state.favorites.filter(photo => photo.id === props.id)) :
      ( state.photoData.filter(photo => photo.id === props.id));
      
      dispatch({type: ACTIONS.OPEN_MODAL, payload: selectedPhoto[0]});

      // If modal is open, disable scrolling

      if (typeof window !== 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  function displayFavorites() {
    if (state.favorites.length > 0) {
      dispatch({type: ACTIONS.UPDATE_HAS_FAVORITE_STATE, payload: true});
      dispatch({type: ACTIONS.DISPLAY_FAVORITE_PHOTOS, payload: state.favorites});
    }
  }

    
  return { 
    toggleFavorites,
    toggleModal,
    photosByTopic,
    returnHome,
    displayFavorites,
    state
  };
}
