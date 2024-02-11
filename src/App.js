import './App.css';

import Map from './components/Map';

import Chat from './components/Chat'
import VideoPlayer from './components/VideoPlayer';


function App() {

  return (
    <div className="App">
      <main>
        <section id="left">
          <VideoPlayer />
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
