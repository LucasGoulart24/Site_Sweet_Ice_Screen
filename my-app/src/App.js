import logo from './Img/logo.png';
import sorvete from './Img/sorvete.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="Menu">
        <div className="Logo">
          <img src={logo} alt="logo"></img>
          <h3>Sweet Ice Scream</h3>
        </div>
      </nav>
      <div className="Banner">
        <h1>Sweet Ice Scream</h1>
      </div>
      <div className="Titulo">
        <h2>Nossos Sabores</h2>
      </div>
      <div className="Sorvetes">
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Sorvete Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
      </div>
      <div className="Copyright">
        <h3>&copy;2025 - Sweet Ice Scream</h3>
      </div>
    </div>
  );
}

export default App;
