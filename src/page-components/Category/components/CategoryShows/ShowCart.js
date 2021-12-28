import { Flex, Box } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledShowImage } from './styled';

function ShowCart({ show }) {
  return (
    <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} mt={4} pr={2} pl={2}>
      <StyledShowImage src={show.images.squareLarge.url} alt={show.name} />
      <Header text={show.name} mt={2} linesToShow={1} />
      <Paragraph
        text={show.description}
        mt={2}
        linesToShow={3}
        variant="l"
        transparent
      />
    </Box>
  );
}

ShowCart.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }),
};

ShowCart.defaultProps = {
  show: {},
};

export default ShowCart;
