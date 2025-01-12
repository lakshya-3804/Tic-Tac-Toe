
import { useState } from 'react';
import Header from './components/header/Header';
import MainCard from './components/mainCard/MainCard';
import PlayerEntry from './components/player/PlayerEntry';
import WinDisplay from './components/screen/WinDisplay';

function App() {
  const [p1, setp1] = useState("X");
  const [p2, setp2] = useState("O");
  const [winner, setwinner] = useState("");
  const [countX, setcX] = useState(0);
  const [countO, setcO] = useState(0);
  return (
    <div className="App" style={{margin:0}}>
      <Header />
      <PlayerEntry setp1={setp1} setp2={setp2} setcO={setcO} setcX={setcX} />
      <WinDisplay winner={`${winner}`} match={`${p1} vs ${p2}`} />
      <MainCard setwinner={setwinner} p1={p1} p2={p2} countO={countO} countX={countX} setcO={setcO} setcX={setcX} />
    </div>
  );
}

export default App;
