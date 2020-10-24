import React from 'react';

import { MdQueue, MdDeveloperBoard, MdLink } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';


const GIT_USER = 'just2click'
const API_KEY = '354bc61a77a94f2e3680c8fd08b680f3';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const GIT_REQUEST_REPOS_URL = `https://api.github.com/users/${GIT_USER}/repos`;
const GIT_REQUEST_PULLS_URL = `https://api.github.com/search/issues?q=is:pr+author:${GIT_USER}`;
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const SideBarItems = [
  { icon: <MdDeveloperBoard />, text: 'Repos' },
  { icon: <FontAwesomeIcon icon={faCodeBranch} />, text: 'Branches' },
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

export default { API_KEY, REQUEST_URL, GIT_REQUEST_REPOS_URL, GIT_REQUEST_PULLS_URL, IMAGE_URL, SideBarItems, FuseOptions };