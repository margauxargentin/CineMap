import './App.css';

import Map from './components/Map';
import Chat from './components/Chat'
import Player from './components/VideoPlayer';
import Chapter from './components/Chapter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CineMap App</h1>
      </header>
      <main>
        <section id="left">
          <Player position="pos" />
        </section>
        <section id="right">
          <Map></Map>
          <Chat></Chat>
        </section>
      </main>
    </div >
  );
}

export default App;
