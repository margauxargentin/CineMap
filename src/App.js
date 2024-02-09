import './App.css';

import Map from './components/Map';
import VideoPlayer from './components/VideoPlayer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>CineMap App</h1>
      </header>
      <main>
        <section id="left">
          <VideoPlayer />
        </section>
        <section id="right">
          <Map></Map>
        </section>
      </main>
    </div >
  );

  
}


export default App;
