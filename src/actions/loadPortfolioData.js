import { START_LOAD_PORTFOLIO_DATA, LOAD_PORTFOLIO_DATA } from "./types";

import { backend_url } from "../config";
/*


*/
const loadPortfolioData = () => dispatch => {
  dispatch({
    type: START_LOAD_PORTFOLIO_DATA
  });
  console.log("fff");
  fetch(`${backend_url}/portfolio`, {
    method: "POST",
    body: JSON.stringify({user: "kayin"}),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => {
      if (data.status === 200) {
        data.json().then(data => {
          dispatch({
            type: LOAD_PORTFOLIO_DATA,
            payload: data
          });
          console.log(data);
        });
      } else {
        console.log("ERROR");
      }
    })
    .catch(e => console.log(e));
};

export default loadPortfolioData;
