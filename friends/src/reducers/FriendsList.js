import { 
  FETCH, SUCCESS, FAILURE,
  // ADD_FETCH, ADD_SUCCESS, ADD_FAILURE,
  // DELETE_FETCH, DELETE_SUCCESS, DELETE_FAILURE,
  // UPDATE_FETCH, UPDATE_SUCCESS, UPDATE_FAILURE,
 } from "../actions";


const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendsList = (state = initialState, action) => {
    
    switch (action.type) {

      case FETCH:
        return {
          ...state,
          fetchingFriends:true
        }
      case SUCCESS:
        return {
          ...state,
          error: null,
          fetchingFriends:false,
          friends: action.payload
        }
      case FAILURE:
        return {
          ...state,
          fetchingFriends:false,
          error: action.payload
        }
        
      default:
        return state;
    }
  };
