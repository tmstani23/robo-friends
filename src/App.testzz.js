import React from 'react';
import { render } from '@testing-library/react';
import App from './containers/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';

const rootReducer = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
))

test('renders learn react link', () => {
  const { getByText } = render(
  <Provider store = {store}>
    <App />
  </Provider>
  );
  const linkElement = getByText(/RoboFriends/i);
  expect(linkElement).toBeInTheDocument();
});
