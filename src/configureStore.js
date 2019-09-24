import { createStore, combineReducers, applyMiddleware } from "redux";
import { appReducer } from "./reducers/appReducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { compose } from "redux";
import { fetchBeersEpic } from "./epics/fetchBeers";

export const configureStore = () => {
  //Combina los epics
  const rootEpic = combineEpics(fetchBeersEpic);

  //Creal el middleware que conecta los epics con Redux
  const epicMiddleware = createEpicMiddleware();

  //Combina los reducers
  const rootReducer = combineReducers({
    app: appReducer
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
