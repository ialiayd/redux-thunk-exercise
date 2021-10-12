import CHARACTER_DETAIL from "../constants/characterDetailTypes";

const initialState = {
  characterData: {},
  isFetching: false,
  isError: false
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_PENDING:
      return { ...state, isFetching: true, characterData: {}, isError: false };
    case CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_SUCCESS: {
      return {
        ...state,
        characterData: action.payload,
        isFetching: false,
        isError: false
      };
    }
    case CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_FAILURE:
      return { ...state, isError: true, isFetching: false };
    default:
      return state;
  }
};

export default charactersReducer;
