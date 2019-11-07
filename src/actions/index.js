import axios from "axios";

export const FETCH_WORD_START = "FETCH_WORD_START";
export const FETCH_WORD_SUCCESS = "FETCH_WORD_SUCCESS";
export const FETCH_WORD_FAIL = "FETCH_WORD_FAIL";

//action creators

export const getWord = word => dispatch => {
  dispatch({ type: FETCH_WORD_START });

  axios
    .get(`https://owlbot.info/api/v3/dictionary/${word}`, {
      headers: {
        Authorization: "Token 31962e31752bcc7e15fe8e5ba6f1340854af5989"
      }
    })
    .then(res => {
      dispatch({ type: FETCH_WORD_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: FETCH_WORD_FAIL, payload: err.message });
      console.log(err);
      console.log(err.response);
    });
};
