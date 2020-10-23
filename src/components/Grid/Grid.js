import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import GridStyled from './Grid.styled';

import Constants from '../../utils/Constants';

function Grid({ items }) {
  return (
    <GridStyled>
      {items.map((item, i) => {
        const idx = i;
        return (
          <Item
            key={idx}
            title={item.title}
            image={`${Constants.IMAGE_URL}/${item.poster_path}`}
            overview={item.overview}
            ratings={item.vote_average}
          />
        );
      })}
    </GridStyled>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

export default Grid;