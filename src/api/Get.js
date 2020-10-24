import axios from 'axios';
import Constants from '../utils/Constants';

const movies = type => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${type}?api_key=${Constants.API_KEY}`
  );
};

const userItems = type => {
  const url = type === 'repos' ? Constants.GIT_REQUEST_REPOS_URL : Constants.GIT_REQUEST_PULLS_URL
  return axios.get(url)
}

export default { movies, userItems };