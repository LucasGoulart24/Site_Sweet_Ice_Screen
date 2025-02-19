import logo from './Img/logo.png';
import sorvete from './Img/sorvete.jpg';
import sorvete2 from './Img/sorvete2.jpg';
import sorvete3 from './Img/sorvete3.jpg';
import sorvete4 from './Img/sorvete4.jpg';
import sorvete5 from './Img/sorvete5.jpg';
import sorvete6 from './Img/sorvete6.jpg';
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
      <div className="Banner">
        <h2>Escolha seu sabor</h2>
        <div className='Escolha'>
          <input type='text' placeholder='Digite seu sabor de sorvete'></input>
          <button>Pesquisa</button>
        </div>
      </div>
      <div className="Titulo">
        <h2>Nossos Sabores</h2>
      </div>
      <div className="Sorvetes">
        <div className="Card">
          <img src={sorvete} alt="sorvete"></img>
          <h3>Morango</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete2} alt="sorvete"></img>
          <h3>Chocolate</h3>
          <p>R$: 09,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete3} alt="sorvete"></img>
          <h3>Creme</h3>
          <p>R$: 07,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete4} alt="sorvete"></img>
          <h3>Menta</h3>
          <p>R$: 08,00</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete5} alt="sorvete"></img>
          <h3>Açai</h3>
          <p>R$: 05,99</p>
          <button>Comprar</button>
        </div>
        <div className="Card">
          <img src={sorvete6} alt="sorvete"></img>
          <h3>Coco</h3>
          <p>R$: 08,00</p>
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
