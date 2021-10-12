import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetchCharacters from "../actions/charactersActions";

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (characters.charactersData.length === 0) {
      dispatch(fetchCharacters());
    }
  }, [dispatch]);

  // useEffect(() => {
  //   const timing = setInterval(() => {
  //     // dispatch(fetchCharacters());
  //     console.log(`object`, new Date().getSeconds());
  //   }, 2000);

  //   return () => {
  //     clearInterval(timing);
  //   };
  // }, [dispatch]);

  console.log(`characters`, characters);

  if (characters.isFetching) return <div>Loading</div>;
  if (characters.isError) return <div>Error</div>;

  console.log(`characters`, characters);

  return (
    <div>
      <h1>CharacterList</h1>

      <div>
        {characters.charactersData.length > 0 &&
          characters.charactersData.map((item) => (
            <div key={item.id}>
              <Link to={`/character/${item.id}`}>{item.name}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharacterList;
