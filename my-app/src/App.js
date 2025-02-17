import logo from './Img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="Menu">
        <div className="Logo">
          <img src={logo} alt="logo"></img>
          <h3>Sweet Ice Screen</h3>
        </div>
      </nav>
    </div>
  );
}

export default App;
