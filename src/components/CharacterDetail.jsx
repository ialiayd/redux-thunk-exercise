import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchCharacterDetailById from "../actions/characterDetailActions";

const CharacterDetail = () => {
  const characterDetail = useSelector((state) => state.characterDetail);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacterDetailById(id));
  }, [dispatch, id]);

  console.log(`characterDetail`, characterDetail);

  if (characterDetail.isFetching) return <div>Loading</div>;
  if (characterDetail.characterData.error)
    return <div>{characterDetail.characterData.error}</div>;

  return (
    <div>
      <h1>CharacterDetail</h1>

      <div>
        {characterDetail.characterData.name && (
          <>
            <div> {characterDetail.characterData.name} </div>
            <img
              src={characterDetail.characterData.image}
              alt={characterDetail.characterData.name}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
