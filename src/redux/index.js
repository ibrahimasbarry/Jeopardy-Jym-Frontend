import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import flashcardsReducer from './reducers/flashcardsReducer';

const rootReducer = combineReducers({ flashcardsReducer })

  export default createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

// const store = createStore(rootReducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

