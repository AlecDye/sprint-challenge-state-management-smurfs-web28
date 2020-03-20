import { FETCH_DATA } from "../actions";

const initialState = {
  smurfList: [],
  isFetchingData: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true
      };
    default:
      return state;
  }
};
