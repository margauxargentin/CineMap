import './App.css';

import Map from './components/Map';
import Chat from './components/Chat'
import Player from './components/VideoPlayer';
import Chapter from './components/Chapter';

function App() {
  return (
    <div className="App">
      <main>
        <section id="left">
        <h1>CineMap App</h1>
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
