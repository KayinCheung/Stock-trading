import {
    SYMBOL_NOT_FOUND,
    SEARCH_SUCCESS
  } from "../../actions/types";
  
  const initialState = {
    tickerExist: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case SEARCH_SUCCESS:
        return {
          ...state,
          tickerExist: true
        };

        case SYMBOL_NOT_FOUND:
        return {
          ...state,
          tickerExist: false
        };
  
      default:
        return state;
    }
  }
  