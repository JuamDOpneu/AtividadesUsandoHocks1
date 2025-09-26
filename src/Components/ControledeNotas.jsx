import { useState } from "react";

function ControledeNotas() {
  const [name, setName] = useState("Nome aqui");
  const [nota, setNota] = useState("");

  function primeiroNome(event) {
    setName(event.target.value);
  }

  function mudarNota(event) {
    setNota(event.target.value);
  }

  // Regra de aprovação (nota >= 6)
  const notaNumero = Number(nota);
  let resultado = "";
  if (nota !== "") {
    resultado = notaNumero >= 6 ? "✅ Aprovado!" : "❌ Reprovado!";
  }

  return (
    <>
      <div className="ControleNota">
        <h2>Notas</h2>

        <h4>Informe seu Nome:</h4>
        <input className = "PNome" onChange={primeiroNome} />
        <p>Seu Nome: {name}</p>

        <h4>Informe sua Nota:</h4>
        <input className="MNota" type="number" max = "10" onChange={mudarNota} />
        <p>Sua Nota: {nota}</p>

        {/* Exibir resultado só se tiver nota */}
        {nota !== "" && <p>Resultado: {resultado}</p>}
        
      </div>
    </>
  );
}

export default ControledeNotas;
