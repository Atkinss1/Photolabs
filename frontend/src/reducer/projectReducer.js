export const initialState = {
  favorites: [],
  hasFavorites: false,
  selectedPhoto: null,
  displayModal: false ,
  photoData: [],
  topicData: []
}

export const ACTIONS = {
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

export function projectReducer(state, action) {

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