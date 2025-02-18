import logo from './Img/logo.png';
import sorvete from './Img/sorvete.jpg'
import './App.css';

// Icones
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
      <nav className="Menu">
        <div className="Logo">
          <img src={logo} alt="logo"></img>
          <h3>Sweet Ice Scream</h3>
        </div>
        <div className='Icone'>
          <FaShoppingCart />
        </div>
      </nav>
      <div className="Banner"></div>
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
        <div className='Redes'>
          <div className='Icones'>
            <FaFacebookF></FaFacebookF>
          </div>
          <div className='Icones'>
            <FaInstagram></FaInstagram>
          </div>
          <div className='Icones'>
            <FaXTwitter></FaXTwitter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
