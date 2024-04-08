import './App.css';
import {Carrito, Loja} from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loja />
        <Carrito />
      </header>
    </div>
  );
}

export default App;
