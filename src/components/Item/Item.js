import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Text,
  FAB,
  Separator,
  Button
} from './Item.styled';

function Item({ title, defaultBranch, language, owner }) {
  return (
    <Container>
      <Content>
        <Text weight='bolder' relative>
          Name: {title}
        </Text>
        <Text color='#BFC0CE' height>
          {defaultBranch}
        </Text>
        { language &&  language.length && <FAB>{language}</FAB> }
        <Text relative>
          Owner: {owner}
        </Text>
        <Separator />
        <Button>Details</Button>
      </Content>
    </Container>
  );
}

Item.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  ratings: PropTypes.string
};

Item.defaultProps = {
  image: '',
  title: '',
  overview: '',
  ratings: ''
};

export default Item;