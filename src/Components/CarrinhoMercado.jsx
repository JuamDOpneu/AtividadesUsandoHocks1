import { useState, useEffect } from "react";

function Carrinho() {
  const [qtde, setQtde] = useState(1);
  const [valor, setValorFinal] = useState(50.0);

  function alterarQtde(funcao) {
    if (funcao == "a") {
      setQtde(qtde + 1);
    } else {
      if (qtde != 1) {
        setQtde(qtde - 1);
      }
    }
  };

//   function calcValor() {
//    setValorFinal(50.0 * qtde);
//   }

  useEffect(() => {
    setValorFinal(qtde * 50.0);
  }, [qtde]);

  return (
    <div className="card">
        <h3>Carrinho Compras</h3>
      <p>Quantidade de itens: {qtde}</p>
      <p>Valor final: {valor}</p>
      <button onClick={() => alterarQtde("a")}>+</button>
      <button onClick={() => alterarQtde("d")}>-</button>
    </div>
  );
}

export default Carrinho;