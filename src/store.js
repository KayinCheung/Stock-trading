import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export function saveToSessionStorage(name){
  try{
      console.log(name)
      sessionStorage.setItem("name", name)
  } catch(e){
      console.log(e)
  }
}

export function loadFromSessionStorage(){
  try{
      const seralizedState = sessionStorage.getItem("name")
      if (seralizedState === null) return undefined
      return JSON.parse(seralizedState)
  } catch(e){
      console.log(e)
      return undefined
  }
}

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
