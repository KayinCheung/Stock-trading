import { LOGIN } from "./types";
import { saveToSessionStorage, loadFromSessionStorage } from "../store";
/*

*/

const loginAction = name => dispatch => {
  dispatch({
    type: LOGIN
  });
  saveToSessionStorage(name);
};

export default loginAction;
