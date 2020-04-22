import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import employeeReducer from '../reducers/main-reducer'

//import createSagaMiddleware from "redux-saga";
//import watcherSaga from '../sagas/api-saga'


const rootReducer = combineReducers({
  employee: employeeReducer,
});
const store = createStore(
   rootReducer,
   applyMiddleware(thunk)
  );


  //redux-saga
  //const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  //const initialiseSagaMiddleware = createSagaMiddleware();

  //const store = createStore(
    //rootReducer,
    //storeEnhancers(
      //applyMiddleware( initialiseSagaMiddleware)
    //)
  //);
  
  //initialiseSagaMiddleware.run(watcherSaga);
  
  export default store;