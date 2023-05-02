import logo from './logo.svg';
import './App.css';

function olaMundo() {
  return <h1>Ola Mundo</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Te amo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Não clique
        </a>
      </header>
    </div>
  );
}

export default App;
