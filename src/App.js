import './App.css';
import Game from './components/Game'

function App() {
  return (
    <div className="App">
      <Game rowNum={20} colNum={20}></Game>
    </div>
  );
}

export default App;
