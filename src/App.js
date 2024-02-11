import './App.css';
import { useState } from 'react';
import Map from './components/Map';

import Chat from './components/Chat'
import VideoPlayer from './components/VideoPlayer';


function App() {

  const [timestamp,setTimestamp] = useState(0)

  const updateTimestamp = (value) => {
    setTimestamp(value);
  };

  return (
    <div className="App">
      <main>
        <section id="left">
          <VideoPlayer timestamp={timestamp} updateTimestamp={updateTimestamp} />
        </section>
        <section id="right">
          <Map updateTimestamp={updateTimestamp}></Map>
          <Chat></Chat>
        </section>
      </main>
    </div >
  );
}


export default App;
