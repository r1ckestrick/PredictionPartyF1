import React, { useState } from "react";

const Race = ({ raceData, onPredictionSubmit }) => {
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
      <h2>{raceData.name}</h2>
      <p>{raceData.date}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Pole Position:
          <select
            value={predictions.polePosition}
            onChange={(event) =>
              setPredictions({ ...predictions, polePosition: event.target.value })
            }
          >
            <option value="">--Seleccione un piloto--</option>
            {raceData.drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </select>
        </label>
        {/* Resto de campos para predecir */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Race;
