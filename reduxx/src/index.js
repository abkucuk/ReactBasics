import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productReducer';
import patternReducer from "./reducers/patternreducer";
import  logger  from "redux-logger";
import  thunk  from "redux-thunk";
const middleware = applyMiddleware(thunk,logger);
const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
    pattern: patternReducer
});


const store = createStore(rootReducer,middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log('dispatch etmeden önce state :', store.getState());

//const action = {
//    type: 'changeTheState',
//    payload: {
//        newState: 'knk degıstı mı'
//    }
//};
//const updateUserName = {
//    type: 'updatedUserName',
//    payload: {
//        user: 'Ahmet'
//    }
//};
const fetchingUsers ={
    type: 'FETCH_USERS_START'
  
};
store.dispatch(fetchingUsers);

store.subscribe(() => {
    console.log('knk store da değişiklik oldu bak hele : ', store.getState());
});
//store.dispatch(updateUserName);

console.log('dispatch ettikten sonra state : ', store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
