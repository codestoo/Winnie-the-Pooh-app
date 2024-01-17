import React from "react";
import CharacterCard from "./CharacterCard";
import characterInfo from "./characters.json";

function Characters() {
  return (
    <div>
      <h2 className="pt-">Our Famous Characters Featured Here.</h2>
      <div className="row justify-content-center">
        {characterInfo.map(function (characterObject) {
          return <CharacterCard characterObject={characterObject} />;
        })}
      </div>
    </div>
  );
}

export default Characters;
