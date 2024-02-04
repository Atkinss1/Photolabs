import { useReducer, useEffect, useRef } from "react";
import axios from "axios";

const initialState = {
  favorites: [],
  selectedPhoto: null,
  displayModal: false ,
  photoData: [],
  topicData: [],
}

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  OPEN_MODAL: 'OPEN_MODAL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
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
         favorites: state.favorites.filter(favoriteId => favoriteId !== action.payload)
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
      top: 100,
      behavior: "auto"
    });
  }, [state.selectedPhoto])

  async function photosByTopic(id) {
    try {
      const response = await axios.get(`/api/topics/photos/${id}`);
      dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data});   
    }
    catch (error) {
      console.error(error);
    }
  }
  
  function toggleFavorites(id) {
      if (state.favorites.includes(id)) {
        dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: id});
      }
      else {
        dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: id});
      }
    }
    
  function toggleModal(props) {
    if (props === undefined) {
      dispatch({type: ACTIONS.CLOSE_MODAL, payload: false});
    } else {
      const selectedPhoto = state.photoData.filter(photo => photo.id === props.id)
      dispatch({type: ACTIONS.OPEN_MODAL, payload: selectedPhoto[0]});
    }
  }
    
  return { 
    toggleFavorites,
    toggleModal,
    photosByTopic,
    state
  };
}
