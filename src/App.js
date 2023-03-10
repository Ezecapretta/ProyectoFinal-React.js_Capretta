import './App.css';
import NavBar from './Components/NavBar/NavBar';
import './Components/NavBar/NavBar.css';
import ItemListContainer from './Components/ItemListContainer';



function App() {
  return (
      <div className="App">
        <NavBar/>
        <ItemListContainer/>
      </div>
  );
}

export default App;
