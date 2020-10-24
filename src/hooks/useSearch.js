import { useState } from 'react';
import Fuse from 'fuse.js';

function search({ fuse, data, term }) {
  let results = [];
  if (fuse.list) {
    results = fuse.search(term);
    return term ? results : data;
  }

  if (data && data.length > 0) {
    const index = data && data[0].name ? 0 : 1
    const key = fuse && fuse.options && fuse.options.keys ? fuse.options.keys[index] : ''

    if (key && term !== '') {
      results = data.filter(element => {
        const value = element[key].toLowerCase()
        return value.includes(term.toLowerCase())
      });
    }
  }
  return term ? results : data;
}

function useSearch({ data = [], options }) {
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = new Fuse(data, options);
  const results = search({ fuse, data, term: searchTerm });
  const reset = () => setSearchTerm('');
  return { results, search: setSearchTerm, searchTerm, reset };
}

export default useSearch;