import "../../node_modules/video-react/dist/video-react.css"; // import css
import "./VideoPlayer.css";
import jsonData from '../backend.json';

import React from 'react';
import { Player } from 'video-react';

export default props => {
  return (
    <div className="VideoPlayer">
      <Player>
        <source src={jsonData.Film.file_url} />
      </Player>
    </div>
  );
};
