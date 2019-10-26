import axios from 'axios';

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAIL = "GET_SMURFS_FAIL";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAIL = "ADD_SMURFS_FAIL";

export const DELETE_SMURF = "DELETE_SMURF";

export function getSmurfs() {
  return dispatch => {
    dispatch({ type: GET_SMURFS_START })

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_FAIL, payload: err })
      })
  }
}

export function addSmurf(smurf) {
  return dispatch => {
    dispatch({ type: ADD_SMURFS_START })

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res)
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: res })
      })
      .catch(err => {
        dispatch({ type: ADD_SMURFS_FAIL, payload: err })
      })
  }
}

export function deleteSmurf(smurf) {
  console.log(smurf)
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        dispatch({ type: DELETE_SMURF, payload: res })
      })
  }
}