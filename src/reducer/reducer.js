import {
  GET_COUNTRIES,
  ADD_COUNTRY_FAVORITE,
  REMOVE_COUNTRY_FAVORITE,
} from "../actions/actions";

const initialState = {
  countries: [],
  favorites: [],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES: {
    }
    case ADD_COUNTRY_FAVORITE: {
    }
    case REMOVE_COUNTRY_FAVORITE: {
    }
    default: {
      return state;
    }
  }
};

export default reducer;
