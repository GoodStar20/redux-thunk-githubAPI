import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './index';

export const searchStart = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (userdata,repos) => {
  return {
    type: SEARCH_SUCCESS,
    payload: userdata,
    repos: repos,

  };
};

export const searchError = (errors) => {
  return {
    type: SEARCH_ERROR,
    errors,
  };
};

export const fetchImage = (keyword) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then((response) => {
        const userdata = response.data.items;
        //console.log(userdata);
        const repos_url = userdata[0].repos_url;
        axios.get(`${repos_url}`).then((respon) => {
          const repos = respon.data;
          //console.log(repos);
          dispatch(searchSuccess(userdata,repos));
        });
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};