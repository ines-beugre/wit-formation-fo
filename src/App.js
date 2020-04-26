import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore, combineReducers} from 'redux';
import formationsReducer from './redux/formations/reducers';
import filtersReducer from './redux/filters/reducers';
import toastReducer from "./redux/toast/reducers";
import Main from './main';

const reducer = combineReducers({
  formationsReducer,
  filtersReducer,
  toastReducer,
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
