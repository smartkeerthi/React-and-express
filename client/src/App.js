import './App.css';
import ConfigButton from './components/configButton/ConfigButton';
import StartButton from './components/startButton/StartButton';
import Datas from './components/datas/Datas';
// import MyTable from './components/myTable/MyTable';

function App() {
  return (
    <div className="App bg-dark">
      <div className="AppBody">
        <StartButton/>
        <ConfigButton/>
      </div>
      <div className="AppBody">
        <Datas/>
        {/* <MyTable/> */}
      </div>
    </div>
  );
}

export default App;
