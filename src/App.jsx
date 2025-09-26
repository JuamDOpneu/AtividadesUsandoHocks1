
import Like from './Components/ControledeNotas.jsx'
import ControledeNotas from './Components/Like.jsx'
import Votacao from './Components/Votacao.jsx'
import Carrinho from './Components/CarrinhoMercado.jsx'
import './App.css'
import ConversorTemp from './Components/ConversorTemp.jsx'
import BarraProgresso from './Components/BarraProgresso.jsx'

function App() {




  return (
    <>
      <ControledeNotas/>
      <Like />
      <Votacao/>
      <Carrinho/>
      <ConversorTemp/>
      <BarraProgresso/>
      <img className='card' src="0_eq-CTDGYEGgv6D4E.jpg" />
    </>
  )
}

export default App
