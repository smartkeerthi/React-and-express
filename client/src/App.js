import './App.css';
import ConfigButton from './components/configButton/ConfigButton';
import StartButton from './components/startButton/StartButton';

function App() {
  return (
    <div className="App bg-dark">
      <div className="AppBody">
        <StartButton/>
        <ConfigButton/>
      </div>
    </div>
  );
}

export default App;
