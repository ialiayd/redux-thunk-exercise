import CHARACTER_DETAIL from "../constants/characterDetailTypes";

const fetchSuccess = (data) => ({
  type: CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_SUCCESS,
  payload: data
});

const fetchFailure = (error) => ({
  type: CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_FAILURE,
  payload: error
});

const fetchPending = () => ({
  type: CHARACTER_DETAIL.FETCH_CHARACTER_DETAIL_PENDING
});

const fetchCharacterDetailById = (characterId) => async (dispatch) => {
  dispatch(fetchPending());
  return fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then((response) => response.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((error) => dispatch(fetchFailure(error)));
};

export default fetchCharacterDetailById;
