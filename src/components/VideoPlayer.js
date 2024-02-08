import "../../node_modules/video-react/dist/video-react.css"; // import css
import "./VideoPlayer.css";
import jsonData from '../backend.json';

import React from 'react';
import { Player } from 'video-react';

import Chapter from '../components/Chapter';

import data from '../backend.json';
const chapters = data.Chapters

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {}
    };
  }
  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state,
      currentTime: state.currentTime
    });
  }

  playOnPos = (timestamp) => {
    this.player.seek(timestamp);
    this.player.play();
  };

  render() {
    return (
      <div>
        <div className="VideoPlayer">
          <Player
            ref={(player) => { this.player = player }}
          >
            <source src={jsonData.Film.file_url} />
          </Player>
        </div>
        <div class="chapters-list">
          {chapters.map((item, index) => (
            <Chapter title={item.title} pos={item.pos} onClick={this.playOnPos(item.pos)}></Chapter>
          ))}
        </div>
      </div>

    );
  }
};
