import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import ShowCart from './ShowCart';

function CategoryShows({ shows, description }) {
  return (
    <StyledCategoryShows>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox>
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
        </StyledBox>
      </Flex>
      {shows && shows.length > 0 && (
        <>
          <Flex pl={2} justifyContent="space-between">
            <Header text={`${shows.length} Podcasts`} variant="xl" />
          </Flex>
          <Flex flexWrap="wrap" flexDirection="row">
            {shows.map((show) => (
              <ShowCart key={show.id} show={show} />
            ))}
          </Flex>
        </>
      )}
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
