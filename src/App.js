import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore, combineReducers} from 'redux';
import formationsReducer from './redux/formations/reducers';
import filtersReducer from './redux/filters/reducers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './main';

const reducer = combineReducers({
  formationsReducer,
  filtersReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
