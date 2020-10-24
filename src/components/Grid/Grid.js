import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

import GridStyled from './Grid.styled';

function Grid({ items }) {
  return (
    <GridStyled>
      {items.map((item, i) => {
        const idx = i;
        return (
          <Item
            key={idx}
            title={item.name ? item.name : item.title}
            defaultBranch={item.default_branch ? item.default_branch : item.state}
            language={item.language ? item.language : item.id.toString()}
            owner={item.owner ? item.owner.login : item.user.login}
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