import { useState, useEffect } from "react";

function ConversorTemp() {
  const [celsius, setCelsius] = useState(0);
  const [fahr, setFahr] = useState(32);

  function pegarTemp(event) {
    setCelsius(event.target.value);

    setFahr((celsius * 9) / 5 + 32);
  }

  useEffect(() => {
    setFahr((celsius * 9) / 5 + 32);
  }, [celsius]);

  return (
    <div className="card">
      <h3>Conversor de Temperatura</h3>
      <p>Digite uma temperatura em Celsius:</p>
      <input onChange={pegarTemp} />
      <p>Temperatura em Fahrenheight: {fahr}</p>
    </div>
  );
}

export default ConversorTemp;