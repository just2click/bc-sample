import React from 'react';

import { MdQueue, MdLocalMovies, MdMovieFilter, MdStars } from 'react-icons/md';

const API_KEY = '354bc61a77a94f2e3680c8fd08b680f3';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const SideBarItems = [
  { icon: <MdLocalMovies />, text: 'Now Playing' },
  { icon: <MdMovieFilter />, text: 'Popular' },
  { icon: <MdStars />, text: 'Top Rated' },
  { icon: <MdQueue />, text: 'Upcoming' }
];

const FuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3
};

export default { API_KEY, REQUEST_URL, IMAGE_URL, SideBarItems, FuseOptions };