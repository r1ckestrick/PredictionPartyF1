import React, { useState } from "react";
import Header from "./Header";
import Race from "./Race";

const Game = () => {
  const [raceNumber, setRaceNumber] = useState(1);
  const [players, setPlayers] = useState([]);
  const [predictions, setPredictions] = useState([]);

  const handleAddPlayer = (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  };

  const handleAddPrediction = (prediction) => {
    setPredictions((prevPredictions) => [...prevPredictions, prediction]);
  };

  return (
    <>
      <Header raceNumber={raceNumber} />
      <Race
        raceNumber={raceNumber}
        players={players}
        predictions={predictions}
        onAddPrediction={handleAddPrediction}
      />
    </>
  );
};

export default Game;
