import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import Header from 'shared-components/Typography/Header';
import SortButton from 'shared-components/SortButton';
import { StyledBox, StyledCategoryShows, TextWrapper } from './styled';
import ShowCart from './ShowCart';

function CategoryShows({ shows, description }) {
  const [sortType, setSortType] = useState('ASC');
  const browser = useSelector((state) => state.device.browser);
  return browser === 'Chrome' ? (
    <StyledCategoryShows>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mt={4}
      >
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
            <SortButton
              side="left"
              options={[
                { key: 'ASC', value: 'SORT A-Z' },
                { key: 'DESC', value: 'SORT Z-A' },
              ]}
              onOptionClick={(option) => {
                setSortType(option);
              }}
            />
          </Flex>
          <Flex flexWrap="wrap" flexDirection="row">
            {shows
              .sort((show1, show2) => {
                if (show1.name > show2.name) {
                  return sortType === 'ASC' ? 1 : -1;
                }
                return sortType === 'ASC' ? -1 : 1;
              })
              .map((show) => (
                <ShowCart key={show.id} show={show} />
              ))}
          </Flex>
        </>
      )}
    </StyledCategoryShows>
  ) : (
    <StyledCategoryShows>
      <Header variant="l" transparent>
        The page only work on the *latest Chrome version*
      </Header>
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
