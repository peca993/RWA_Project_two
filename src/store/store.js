import { createStore, combineReducers,  applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { pages,title } from '../reducers';
import rootSaga  from '../sagas/index';
import * as action from '../actions';

const sagaMiddleware = createSagaMiddleware()

/*
function logger({ getState }) {
    return next => action => {
      const returnValue = next(action);
      return returnValue;
    }
  }
*/

const reducer = combineReducers({pages,title})

const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
store.runSaga = sagaMiddleware.run

//const store = applyMiddleware()(createStore);


export default store