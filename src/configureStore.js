import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { compose } from "redux";
import beersReducer, { loadBeersEpic } from "./reducers/beers";

export const configureStore = () => {
  //Combina los epics
  const rootEpic = combineEpics(loadBeersEpic);

  //Creal el middleware que conecta los epics con Redux
  const epicMiddleware = createEpicMiddleware();

  //Combina los reducers
  const rootReducer = combineReducers({
    beers: beersReducer
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  //Crea el store, y aplica el epicMiddleware
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  //Inicializa el middleware de OBS con los epics
  epicMiddleware.run(rootEpic);
  //Regresa el store configurado
  return store;
};
