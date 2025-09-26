import { useState } from "react";
import "./BarraProgresso.css";

function BarraProgresso() {
  const [progresso, setProgresso] = useState(0);

  function mudaBarra(acao) {
    if (acao === 1 && progresso < 100) {
      setProgresso(progresso + 10);
    } else if (acao === 2 && progresso > 0) {
      setProgresso(progresso - 10);
    }
  }

  return (
    <div className="like">
      <button onClick={() => mudaBarra(1)}>+10%</button>
      <button onClick={() => mudaBarra(2)}>-10%</button>
      <p>{progresso}%</p>

      <div className="barra-fundo">
        <div className="barra-preenchida" style={{ width: `${progresso}%` }} />
      </div>
    </div>
  );
}

export default BarraProgresso;
