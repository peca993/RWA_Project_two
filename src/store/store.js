import { createStore, combineReducers,  applyMiddleware } from 'redux';
//  SAGA MAYBE IMPORT HERE
import { pages,title } from '../reducers';


function logger({ getState }) {
    return next => action => {
      const returnValue = next(action);
      return returnValue;
    }
  }


const reducer = combineReducers({pages,title})
// middleware SAGA maybe
const store = createStore(reducer,applyMiddleware(logger))
//const store = applyMiddleware()(createStore);


export default store