import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_SMURF });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(".get", res);
      dispatch({ type: UPDATE_SMURF, payload: res.data });
    })
    .catch(err => console.error(err));
};
