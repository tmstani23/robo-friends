import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import App from './containers/App';
import './styles/App.css';
import { searchRobotsReducer, requestRobotsReducer } from './reducers';

const rootReducer = combineReducers({
  searchRobotsReducer,
  requestRobotsReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


