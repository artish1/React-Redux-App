import React from "react";

import { useSelector } from "react-redux";

import WordCard from "../WordCard/WordCard";

import "./WordCards.scss";

const WordCards = () => {
  const wordData = useSelector(state => state.wordData);

  console.log("WORD DATA: ", wordData);

  if (!wordData) return <h2>Search for a word ;)</h2>;
  return (
    <div className="word-wrapper">
      {wordData.definitions.map((definition, index) => {
        return (
          <WordCard
            word={wordData.word}
            definition={definition.definition}
            image={definition.image_url}
            key={index}
            pronunciation={wordData.pronunciation}
            wordType={definition.type}
            wordExample={definition.example}
          />
        );
      })}
    </div>
  );
};

export default WordCards;
