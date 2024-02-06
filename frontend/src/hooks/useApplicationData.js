import { useReducer, useEffect, useRef } from "react";
import axios from "axios";

const initialState = {
  favorites: [],
  hasFavorites: false,
  selectedPhoto: null,
  displayModal: false ,
  photoData: [],
  topicData: []
}

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  DISPLAY_FAVORITE_PHOTOS: 'DISPLAY_FAVORITE_PHOTOS',
  UPDATE_HAS_FAVORITE_STATE: 'UPDATE_HAS_FAVORITE_STATE'
}

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
         favorites: [...state.favorites, action.payload]
        }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
         favorites: state.favorites.filter(favorite => favorite !== action.payload)
        }
    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
         displayModal: true, selectedPhoto: action.payload
        }
    case ACTIONS.CLOSE_MODAL:
      return {...state,
         displayModal: false
        }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.DISPLAY_FAVORITE_PHOTOS:
      return {
        ...state,
        favorites: action.payload
      }
    case ACTIONS.UPDATE_HAS_FAVORITE_STATE:
      return {...state,
      hasFavorites: action.payload
    }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
          );
  }
}

export const useApplicationData =() => {

  const [state, dispatch] = useReducer(reducer, initialState);

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

      if (state.favorites.includes(photo)) {
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo});
        if (state.favorites.length <= 1) {
          dispatch({type: ACTIONS.UPDATE_HAS_FAVORITE_STATE, payload: false});
        }
      } else {
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
