import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import Details from '../components/DetailsPage';
import store from '../configureStore/store';

const mockStore = configureStore([]);

test('Home component renders correctly', () => {
  act(() => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
