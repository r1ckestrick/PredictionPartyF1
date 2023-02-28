import React, { useState } from "react";

const PredictionForm = ({ players, onPredictionSubmit }) => {
  const [predictions, setPredictions] = useState({
    polePosition: "",
    fastestLap: "",
    firstPlace: "",
    secondPlace: "",
    thirdPlace: "",
    firstToRetire: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onPredictionSubmit(predictions);
  };

  return (
    <div>
      <h2>Realizar predicciones</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Piloto pole position:
          <select
            value={predictions.polePosition}
            onChange={(event) =>
              setPredictions({ ...predictions, polePosition: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Vuelta rápida:
          <select
            value={predictions.fastestLap}
            onChange={(event) =>
              setPredictions({ ...predictions, fastestLap: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Primer lugar:
          <select
            value={predictions.firstPlace}
            onChange={(event) =>
              setPredictions({ ...predictions, firstPlace: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Segundo lugar:
          <select
            value={predictions.secondPlace}
            onChange={(event) =>
              setPredictions({ ...predictions, secondPlace: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Tercer lugar:
          <select
            value={predictions.thirdPlace}
            onChange={(event) =>
              setPredictions({ ...predictions, thirdPlace: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Primer piloto en retirarse:
          <select
            value={predictions.firstToRetire}
            onChange={(event) =>
              setPredictions({ ...predictions, firstToRetire: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </label>
       
