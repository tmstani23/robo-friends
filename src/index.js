import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore } from 'redux';
import 'tachyons';
import App from './containers/App';
import './styles/App.css';
import { searchRobotsReducer } from './reducers';


const store = createStore(searchRobotsReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider reduxStore = {store}> 
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


