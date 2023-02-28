import React from "react";

const PlayerList = ({ players }) => {
  return (
    <div>
      <h2>Jugadores</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
