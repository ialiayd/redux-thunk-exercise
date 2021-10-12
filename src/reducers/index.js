import { combineReducers } from "redux";

import charactersReducer from "./charactersReducer";
import characterDetailReducer from "./characterDetailReducer";

export default combineReducers({
  characters: charactersReducer,
  characterDetail: characterDetailReducer
});
