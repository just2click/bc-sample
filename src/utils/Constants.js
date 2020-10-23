import React from 'react';

import { MdQueue, MdExtension, MdBugReport, MdLink } from 'react-icons/md';

const API_KEY = '354bc61a77a94f2e3680c8fd08b680f3';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const GIT_REQUEST_URL = 'https://api.github.com/users/';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const SideBarItems = [
  { icon: <MdExtension />, text: 'Extensions' },
  { icon: <MdBugReport />, text: 'Bugs' },
  { icon: <MdLink />, text: 'Links' },
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

export default { API_KEY, REQUEST_URL, GIT_REQUEST_URL, IMAGE_URL, SideBarItems, FuseOptions };