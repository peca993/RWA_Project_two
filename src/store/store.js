import { createStore, combineReducers,  applyMiddleware } from 'redux';
//  SAGA MAYBE IMPORT HERE
import { links } from '../reducers';


function logger({ getState }) {
    return next => action => {
      const returnValue = next(action);
      return returnValue;
    }
  }


const reducer = combineReducers({links})
// middleware SAGA maybe
const store = createStore(reducer,applyMiddleware(logger))
//const store = applyMiddleware()(createStore);


export default store