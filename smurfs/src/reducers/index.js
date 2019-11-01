import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, ADD_SMURFS_START, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL,
DELETE_SMURF } from '../actions';

const initialState = {
  smurfs: [
    {
      name: 'Dopey',
      age: 100,
      height: '3cm',
      id: '12'
    }
  ],
  smurfingSuccess: false,
  isLoading: false,
  isPosting: false,
  error: null,
  delete: false
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isLoading: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        smurfingSuccess: true,
        isLoading: false
      }
    case GET_SMURFS_FAIL:
      return {
        ...state,
        smurfingSuccess: false,
        isLoading: false,
        error: action.payload
      }
    case ADD_SMURFS_START:
      return {
        ...state,
        isPosting: true
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...action.payload],
        isPosting: false
      }
    case ADD_SMURFS_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      }
    case DELETE_SMURF:
      return {
        ...state,
        delete: !state.delete
      }
    default:
      return state
  }
}