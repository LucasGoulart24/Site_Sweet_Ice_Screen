import logo from './Img/logo.png';
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
      <div className="Copyright">
        <h3>&copy;2025 - Sweet Ice Scream</h3>
      </div>
    </div>
  );
}

export default App;
