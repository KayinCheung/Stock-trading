import { LOGIN, LOGOUT } from "./types";
import {
  saveToSessionStorage,
  loadFromSessionStorage,
  removeFromSessionStorage
} from "../store";
/*

*/

export const loginAction = name => dispatch => {
  dispatch({
    type: LOGIN
  });
  saveToSessionStorage(name);
};

export const logoutAction = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
  removeFromSessionStorage();
};

