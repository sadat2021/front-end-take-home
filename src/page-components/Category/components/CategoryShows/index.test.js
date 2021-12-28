import { render } from '@testing-library/react';
import CategoryShows from '.';
import { shows } from './test-data';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn().mockReturnValueOnce({
    device: {
      browser: 'Chrome',
    },
  }),
}));
describe('CategoryShows test', () => {
  test('Display the correct number of podcasts', () => {
    const { queryByText, container } = render(<CategoryShows shows={shows} />);
    expect(queryByText(`${shows.length} Podcasts`)).toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
  test('The Category shows page only work on the *latest Chrome version*', () => {
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useSelector: jest.fn().mockReturnValueOnce({
        device: {
          browser: 'FireFox',
        },
      }),
    }));
    const { queryByText, container } = render(<CategoryShows shows={shows} />);
    expect(queryByText('The page only work on the *latest Chrome version*'))
      .toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
});
