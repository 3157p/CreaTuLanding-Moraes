import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">  
    <NavBar />
    <ItemListContainer contenido={"Bienvenido a tu carniceria online de confianza"}/>
    </div>
  );
}

export default App;
