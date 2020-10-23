import axios from 'axios';
import Constants from '../utils/Constants';

const movies = type => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${type}?api_key=${Constants.API_KEY}`
  );
};

const repos = user => {
  return axios.get(
    `${Constants.GIT_REQUEST_URL}${user}/repos`
  )
}

export default { movies, repos };